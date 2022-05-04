import React from 'react'
import * as Icon from 'react-bootstrap-icons'

import { CircleActionButton, DefaultButton } from '../../../components'

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
                style={{ width: "300px", paddingLeft: "20px", paddingRight: "20px",  borderRadius: "2vh" }}
                className="border rounded-extra d-flex bg-primary text-white p-3"
            >
                <div style={{ flex: "20%" }}>
                    <div
                        style={{ height: "50px", width: "50px" }} 
                        className="bg-white rounded-extra"
                    >
                    </div>
                </div>

                <div 
                    style={{ flex: "70%" }}
                    className="d-flex flex-column"
                >
                    <span className="text-roboto-700 fs-5">
                        {username}
                    </span>
                    <div
                        style={{ opacity: "0.75" }} 
                        className="d-flex align-items-center"
                    >
                        <Icon.Building />
                        <div className="d-inline mx-1"></div>
                        <span style={{ fontSize: "15px" }}>
                            Shymkent
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard