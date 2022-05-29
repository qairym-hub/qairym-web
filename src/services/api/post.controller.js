import axios, { AxiosError } from "axios";
import authController from "./auth.controller";

class PostController {
  async save(post, token) {
    const header = authController.getHeader(token);

    try {
      const response = await axios.post(
        `https://qairhub.herokuapp.com/api/post/save`,
        post,
        header
      );

      return response.data;
    } catch (error) {
      return console.error("CLIENT_ERR", error);
    }
  }

  async getByUserId(userId, token, onSuccess, onError) {
    const header = authController.getHeader(token);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/post/find/${userId}`,
        header
      );

      return onSuccess(response.data, null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return onError(null, error);
      }

      return console.error("CLIENT_ERR", error);
    }
  }
}

export default new PostController();
