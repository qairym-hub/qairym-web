class AuthResponse {
    public accessToken: String
    public refreshToken: String

    constructor(accessToken: String, refreshToken: String) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken
    }
}

export default AuthResponse