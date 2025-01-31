import { isUndefined, omitBy } from 'lodash'
import { LoaderFunction } from 'react-router-dom'
import { productFetching } from 'src/apis/product'
import { endProductDetailFetching, startProductDetailFetching } from 'src/constants/event'
import { queryClient } from 'src/routes/main.route'
import { ProductListQuery } from 'src/types/product.type'

export const productDetailLoader: LoaderFunction = async ({ params }) => {
    const productId = params.productId?.split('-0-')[1]

    window.dispatchEvent(
        new CustomEvent(startProductDetailFetching, {
            detail: {
                productDetail: productId
            }
        })
    )

    const productDetail = await queryClient.fetchQuery({
        queryKey: ['productDetail', productId],
        queryFn: () => productFetching.productDetail(productId as string),
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 50
    })

    const relativedProducts = await queryClient.fetchQuery({
        queryKey: ['relativedProducts', productDetail.data.result.category],
        queryFn: () => productFetching.productList({ category: productDetail.data.result.category, sold: 'desc' }),
        staleTime: 1000 * 60 * 2
    })

    window.dispatchEvent(
        new CustomEvent(endProductDetailFetching, {
            detail: {
                productDetail: productId
            }
        })
    )

    return [productDetail.data.result, relativedProducts.data.result]
}

export const productListLoader: LoaderFunction = async ({ request }) => {
    const queryParams = new URL(request.url).searchParams as Partial<Record<keyof ProductListQuery, string>>

    const productList = await queryClient.fetchQuery({
        queryKey: ['productList'],
        queryFn: () =>
            productFetching.productList(
                omitBy(
                    {
                        ...queryParams,
                        page: Number(queryParams?.page) || undefined
                    },
                    isUndefined
                ) as ProductListQuery
            ),
        staleTime: 1000 * 60 * 2
    })

    const categories = await queryClient.fetchQuery({
        queryKey: ['categories'],
        queryFn: () => productFetching.categoryList(),
        staleTime: Infinity
    })

    return [productList.data.result, categories.data.result]
}
