import { LoaderFunction } from 'react-router-dom'
import { ProductApi } from 'src/apis/product.api'
import { queryClient } from 'src/routes/main.route'

export const productLoader: LoaderFunction = async () => {
    await queryClient.fetchQuery({
        queryKey: ['productList', JSON.stringify({ limit: import.meta.env.VITE_LIMIT })],
        queryFn: () => ProductApi.getAllProduct({ limit: import.meta.env.VITE_LIMIT }),
        staleTime: 1000 * 60 * 2
    })

    const productAnalytic = await queryClient.fetchQuery({
        queryKey: ['productAnalytic'],
        queryFn: ProductApi.productAnalytic
    })

    const categories = await queryClient.fetchQuery({
        queryKey: ['categories'],
        queryFn: ProductApi.getAllCategories
    })

    return [productAnalytic.data, categories.data.result]
}
