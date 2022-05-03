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
                style={{ width: "300px", paddingLeft: "20px", paddingRight: "20px" }}
                className="border rounded-extra py-3"
            >
                <div
                    className=""
                >
                    {/*
                    <div style={{ borderRadius: "50%", aspectRatio: "1/1", height: "100%", background: "lightblue" }}>

                    </div>*/}
                    <span className="text-roboto-700 fs-5 px-1">
                        {username}
                    </span>
                </div>

                <div
                    className="d-flex flex-column justify-content-around"
                >
                        {/* <div className="d-inline">
                        <DefaultButton
                            text="Button"
                        />
                        </div>
                        <div className="d-inline">
                        <DefaultButton
                            text="Button"
                        />
                        </div> */}  
                </div>
            </div>
        </>
    )
}

export default UserCard