import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "../actions/types"

const initialState = {
    uid: '',
    authenticated: false,
    profile: {
        username: ''
    },
    token: {
        accessToken: '',
        refreshToken: ''
    },
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                username: action.payload.username,
                uid: action.payload.uid,
                profile: action.payload.profile,
                token: action.payload.token
            }

        case SIGNOUT_SUCCESS:
            return initialState

        default:
            return state
    }
}

export default authReducer