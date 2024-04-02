import type UserModel from "~/api/models/Users/UserModel"
export const createUser = async (userData: UserModel): Promise<UserModel> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(
            config.public.apiBackUrl + '/api/users/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
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