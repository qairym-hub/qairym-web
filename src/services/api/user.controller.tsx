import axios, { AxiosError } from 'axios'

class UserController {

    public async login(username: String, password: String, onSuccess: any, onError: any) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/user/login?username=${username}&password=${password}`
            )

            return onSuccess(response.data)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error))
                return onError(error)

            return console.error('CLIENT_ERR', error)
        }
    }

    public async create(user: Object, onSuccess: any, onError: any) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/user/register`,
                user
            )

            return onSuccess(response.data)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error))
                return onError(null, error)

            return console.error('CLIENT_ERR', error)
        }
    }

    public async getById(userId: Number, callback: any) {

    }

    public async loadByUsername(username: String, token: String) {

    }
}