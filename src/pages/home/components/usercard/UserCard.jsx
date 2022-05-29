import React from 'react'
import { Placeholder, Spinner } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

import ActionButtons from './ActionButtons'

const UserCard = (
    {
        user,
        loading = true
    }
) => {

    return (
        <>
            <div
                style={{ width: "300px", paddingLeft: "20px", paddingRight: "20px",  borderRadius: "2vh" }}
                className="border rounded-extra bg-primary text-white p-3"
            >
                <div className="d-flex">
                    <div style={{ flex: "25%" }}>
                        <div
                            style={{ height: "50px", width: "50px" }} 
                            className="bg-white rounded-extra"
                        >
                        </div>
                    </div>

                    <div 
                        style={{ flex: "80%" }}
                        className="d-flex flex-column"
                    >
                        {loading ? (
                            <div>
                                <Placeholder animation="glow">
                                    <Placeholder 
                                        className="rounded-3 w-100"
                                    />
                                    <Placeholder 
                                        className="rounded-3 w-50"
                                    />
                                </Placeholder>
                            </div>
                        ) : (
                            <>
                                <span className="text-roboto-700 fs-5">
                                    {user.username}
                                </span>
                                <div
                                    style={{ opacity: "0.75" }} 
                                    className="d-flex align-items-center"
                                >
                                    <span style={{ fontSize: "15px" }}>
                                        {user.city}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <div
                        style={{ backgroundColor: "rgb(255, 255, 255, .25)" }} 
                        className="rounded-extra text-white py-2 px-3 mt-5"
                    >
                        {loading ? (
                            <Placeholder animation="glow">
                                <div className="d-flex align-items-center">
                                    <span
                                        style={{ flex: "80%" }} 
                                        className="text-roboto-500"
                                    >
                                        Подписчики
                                    </span>
                                    <span
                                        style={{ flex: "20%" }} 
                                        className="text-roboto-500 fs-4"
                                    >
                                        <Placeholder 
                                            className="rounded-3 w-75"
                                        />
                                    </span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span
                                        style={{ flex: "80%" }} 
                                        className="text-roboto-500"
                                    >
                                        Подписки
                                    </span>
                                    <span
                                        style={{ flex: "20%" }} 
                                        className="text-roboto-500 fs-4"
                                    >
                                        <Placeholder 
                                            className="rounded-3 w-75"
                                        />
                                    </span>
                                </div>
                            </Placeholder>
                        ) : (
                            <>
                            <div className="d-flex align-items-center">
                                <span
                                    style={{ flex: "80%" }} 
                                    className="text-roboto-500"
                                >
                                    Подписчики
                                </span>
                                <span
                                    style={{ flex: "20%" }} 
                                    className="text-roboto-500 fs-4"
                                >
                                    {user.followers}
                                </span>
                            </div>

                            <div className="d-flex align-items-center">
                                <span
                                    style={{ flex: "80%" }} 
                                    className="text-roboto-500"
                                >
                                    Подписки
                                </span>
                                <span
                                    style={{ flex: "20%" }} 
                                    className="text-roboto-500 fs-4"
                                >
                                    {user.followings}
                                </span>
                            </div>
                            </>
                        )}
                    </div>

                    <div className="mt-3">
                        <ActionButtons />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard