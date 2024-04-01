export default class UserModel {
    id: number
    full_name: string
    user_name: string
    email: string
    password: string
    profile_picture: string
    category_user_id: number

    constructor(id: number, full_name: string, user_name: string, email: string, password: string, profile_picture: string, category_user_id: number) {
        this.id = id
        this.full_name = full_name
        this.user_name = user_name
        this.email = email
        this.password = password
        this.profile_picture = profile_picture
        this.category_user_id = category_user_id
    }
}