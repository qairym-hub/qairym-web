import axios, { AxiosError } from 'axios'
import { UserRegistrationForm } from '../types'


class AuthController {
    public getHeader(token: string): object {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }

    public async login(username: String, password: String, callback: any) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/user/login?username=${username}&password=${password}`
            )

            return callback(response.data, null)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error))
                return callback(null, error)

            return console.error('CLIENT_ERR', error)
        }
    }

    public async create(user: any, onSuccess: any, onError: any) {
        try {
            const response = await axios.post(
                `https://qaihub.herokuapp.com/api/user/save`, user
            )

            return onSuccess(response.data)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error))
                return onError(null, error)

            return console.error('CLIENT_ERR', error)
        }
    }

    public async getById(userId: Number, token: string, onSuccess: any, onError: any) {
        const header = this.getHeader(token)

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/find/id/${userId}`,
                header
            )

            return onSuccess(response.data, null)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                return onError(null, error)
            }

            return console.error('CLIENT_ERR', error)
        }
    }

    public async loadByUsername(username: String, token: String) {

    }
}

export default new AuthController()