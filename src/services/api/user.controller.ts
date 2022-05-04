import axios, { AxiosError } from 'axios'
import authController from "./auth.controller"

class UserController {

    public async getall(pageNumber: number, pageSize: number, onSuccess: any, onError: any) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/find?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            )

            return onSuccess(response.data, null)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                return onError(null, error)
            }

            return console.error('CLIENT_ERR', error)
        }
    }

    public async getById(userId: number, token: string, onSuccess: any, onError: any) {
        const header = authController.getHeader(token)

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

    public async getUsername(username: string, onSuccess: any, onError: any) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/find/username/${username}`,
            )

            return onSuccess(response.data, null)
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                return onError(null, error)
            }

            return console.error('CLIENT_ERR', error)
        }
    }

    public async getFollowers(userId: number, token: string, onSuccess: any, onError: any) {
        const header = authController.getHeader(token)

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/find/followers/${userId}`,
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
}

export default new UserController()