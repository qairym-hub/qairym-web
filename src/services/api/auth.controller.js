import axios, { AxiosError } from 'axios'

class AuthController {
    getHeader(token) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }

    async login(username, password, callback) {
        try {
            const response = await axios.post(
                `https://qairhub.herokuapp.com/login`,
                {
                    username: username,
                    password: password
                }
            )

            return callback(response.data, null)
        } catch (error) {
            if (axios.isAxiosError(error))
                return callback(null, error)

            return console.error('CLIENT_ERR', error)
        }
    }

async create(user, onSuccess, onError) {
        try {
            const response = await axios.post(
                `https://qairhub.herokuapp.com/api/user/save`, user
            )

            return onSuccess(response.data)
        } catch (error) {
            if (axios.isAxiosError(error))
                return onError(null, error)

            return console.error('CLIENT_ERR', error)
        }
    }

    async getById(userId, token, onSuccess, onError) {
        const header = this.getHeader(token)

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/find/id/${userId}`,
                header
            )

            return onSuccess(response.data, null)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return onError(null, error)
            }

            return console.error('CLIENT_ERR', error)
        }
    }

    async loadByToken(token) {
            const header = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }

            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/api/user/profile`,
                header
            )

            return response.data
    }
}

export default new AuthController()