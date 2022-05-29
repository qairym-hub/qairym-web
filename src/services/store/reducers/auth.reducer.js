import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../actions/types";

const initialState = {
  authenticated: false,
  token: {
    accessToken: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        token: {
          accessToken: action.payload.auth.access_token,
        },
      };
    case SIGNOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
