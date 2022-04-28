import React from 'react'
import * as Icon from 'react-bootstrap-icons'

import { CircleActionButton } from '../../../components'

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
                className="d-flex border rounded-extra py-3"
            >
                <div
                    style={{ flex: "70%", }}
                    className="d-flex align-items-center"
                >
                    <div style={{ borderRadius: "50%", aspectRatio: "1/1", height: "100%", background: "lightblue" }}>

                    </div>
                    <span className="text-roboto-700 fs-5 mx-2">
                        {username}
                    </span>
                </div>

                <div
                    style={{ flex: "30%" }}
                    className="d-flex align-items-center justify-content-end"
                >
                    <div>

                    </div>
                    <div className="mx-1">

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard