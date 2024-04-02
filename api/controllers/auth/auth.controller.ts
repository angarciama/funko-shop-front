import LoginRequestModel from "~/api/models/Auth/LoginRequestModel";
import LoginResponseModel from "~/api/models/Auth/LoginResponseModel";
export const loginUser = async (loginData: LoginRequestModel): Promise<LoginResponseModel> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(
            config.public.apiBackUrl + '/api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
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