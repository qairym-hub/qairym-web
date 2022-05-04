import axios, { AxiosError } from "axios";
import { PostCreationForm } from "../types";
import authController from "./auth.controller";

class PostController {

    public async save(post: PostCreationForm, token: string, onSuccess: any, onError: any) {
        const header = authController.getHeader(token)

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/post/save`,
                post,
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

    public async getByUserId(userId: number, token: string, onSuccess: any, onError: any) {
        const header = authController.getHeader(token)

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/post/find/${userId}`,
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

export default new PostController()