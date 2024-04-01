import { defineStore } from 'pinia'
import ProductsModel from '~/api/models/products/productsModel'

export const productsStore = defineStore({
    id: 'Products',
    state: () => ({
        generalProductsModel: [] as ProductsModel[]
    }),
    actions: {
        setGeneralUserModel(getGeneralProductsModel: ProductsModel[]) {
            this.generalProductsModel = getGeneralProductsModel
        }
    }
})