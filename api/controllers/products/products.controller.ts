import type ProductsModel from "~/api/models/products/productsModel"
export const allProducts = async (): Promise<ProductsModel[]> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(config.public.apiBackUrl + '/api/products/all')
        if (!response.ok) {
            throw new Error('Error fetching products')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching products:', error)
        throw error
    }
}