import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { route } from 'src/constants/route'
import { LoginResponse } from 'src/types/auth.type'
import { Return } from 'src/types/return.type'
import { ls } from 'src/utils/localStorage'

class Http {
    private instance: AxiosInstance
    private access_token = ls.getItem('profile')
        ? (JSON.parse(ls.getItem('profile') as string) as LoginResponse).access_token
        : undefined
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_ENDPOINT,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: this.access_token
            }
        })
        this.middlewareRequest()
        this.middlewareResponse()
    }
    getInstanceAxios() {
        return this.instance
    }
    middlewareRequest() {
        this.instance.interceptors.request.use((config) => {
            config.headers.Authorization = this.access_token
            console.log('config', config)
            return config
        })
    }
    middlewareResponse() {
        this.instance.interceptors.response.use((response: AxiosResponse<Return<any>>) => {
            const { config, status, data } = response
            if (status === 201 && config.url?.endsWith(route.login)) {
                this.access_token = data.result.access_token
            }
            return response
        })
    }
}

export const http = new Http().getInstanceAxios()
