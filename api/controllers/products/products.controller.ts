// @ts-ignore
import type ProductsModel from "~/api/models/products/productsModel"
export const allProducts = async (): Promise<ProductsModel[]> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(
            config.public.apiBackUrl + '/api/products/all',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        
        if (!response.ok) {
            throw new Error('Error fetching products')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}

export const createProduct = async (productData: ProductsModel): Promise<ProductsModel> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(
            config.public.apiBackUrl + '/api/products/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            }
        )

        if (!response.ok) {
            throw new Error('Error fetching user')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching user:', error)
        throw error
    }
}