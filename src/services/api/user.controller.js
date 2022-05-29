import axios, { AxiosError } from "axios";
import authController from "./auth.controller";

class UserController {
  async getall(pageNumber, pageSize, onSuccess, onError) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/find?pageNumber=${pageNumber}&pageSize=${pageSize}`
      );

      return onSuccess(response.data, null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return onError(null, error);
      }

      return console.error("CLIENT_ERR", error);
    }
  }

  async getById(userId, token, onSuccess, onError) {
    const header = authController.getHeader(token);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/find/id/${userId}`,
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

  async getUsername(username, onSuccess, onError) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/user/find/username/${username}`
      );

      return onSuccess(response.data, null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return onError(null, error);
      }

      return console.error("CLIENT_ERR", error);
    }
  }

  async getFollowers(userId, token) {
    const header = authController.getHeader(token);

    try {
      const response = await axios.get(
        `https://qairhub.herokuapp.com/api/user/find/followers/${userId}`,
        header
      );
      return response.data;
    } catch (error) {
      return console.error("CLIENT_ERR", error);
    }

    // try {
    //     const response = await axios.get(
    //         `https://qairhub.herokuapp.com/api/user/find/followers/${userId}`,
    //         header
    //     )
    //     return onSuccess(response.data, null)
    // } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //         return onError(null, error)
    //     }

    //     return console.error('CLIENT_ERR', error)
    // }
  }

  async getFollowings(userId, token) {
    const header = authController.getHeader(token);
    try {
      const response = await axios.get(
        `https://qairhub.herokuapp.com/api/user/find/followings/${userId}`,
        header
      );
      return response.data;
    } catch (error) {
      return console.error("CLIENT_ERR", error);
    }
  }
}

export default new UserController();
