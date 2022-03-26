import axios, { AxiosError } from 'axios'

class UserController {

    public async login(username: String, password: String, callback: any) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/user/login?username=${username}&password=${password}`
            )

            return callback(response.data)
        } catch (error: AxiosError | any) {
            if (axios.isAxiosError(error))
                return callback(null, error)

            return console.error('Stock error', error)
        }
    }

    public async create(user: Object, callback: any) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/user/register`,
                user
            )

            return callback(response.data)
        } catch (error: AxiosError | any) {
            if (axios.isAxiosError(error))
                return callback(null, error)

            return console.error('Stock error', error)
        }
    }

    public async getById(userId: Number, callback: any) {

    }

    public async loadByUsername(username: String, token: String) {

    }
}