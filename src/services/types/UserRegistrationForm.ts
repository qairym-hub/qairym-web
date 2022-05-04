type UserRegistrationForm = {
    username: string;
    password: string;
    location: {
        cityId: number
    };
    roles: [
        {
            id: 1
        }
    ]
}

export default UserRegistrationForm