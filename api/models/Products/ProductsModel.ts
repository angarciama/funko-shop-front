export default class ProductsModel {
    id: number | undefined
    product_name: string
    product_description: string
    image: string
    price: number
    category_id: number

    constructor(id: number | undefined, product_name: string, product_description: string, image: string, price: number, category_id: number) {
        this.id = id
        this.product_name = product_name
        this.product_description = product_description
        this.image = image
        this.price = price
        this.category_id = category_id
    }
}