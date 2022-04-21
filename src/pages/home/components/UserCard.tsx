import React from 'react'

interface UserCardProps {
    photoUrl?: string,
    username: string
}

const UserCard: React.FunctionComponent<UserCardProps> = (
    {
        photoUrl,
        username
    }
) => {

    return (
        <>
            <div
                style={{ width: "300px", paddingLeft: "20px", paddingRight: "20px" }}
                className="d-flex border rounded-extra py-2"
            >
                <div
                    style={{ flex: "70%", }}
                    className="d-flex align-items-center "
                >
                    <div style={{ borderRadius: "50%", aspectRatio: "1/1", height: "80%", background: "lightblue" }}>

                    </div>
                    <span className="text-roboto-700 mx-2">
                        {username}
                    </span>
                </div>

                <div
                    style={{ flex: "30%" }}
                    className="d-flex align-items-center"
                >
                    <span>
                        btn1
                    </span>
                    <span className="px-2">
                        btn2
                    </span>
                </div>
            </div>
        </>
    )
}

export default UserCard