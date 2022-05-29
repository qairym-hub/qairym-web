import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../actions/types"

const initialState = {
    uid: '',
    authenticated: false,
    profile: {
        username: 'zhoma',
        city: 'Shymkent'
    },
    token: {
        accessToken: '',
        refreshToken: ''
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            }

        case SIGNOUT_SUCCESS:
            return initialState

        default:
            return state
    }
}

export default authReducer