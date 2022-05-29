import React from 'react'

const Header = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img
                    style={{ width: "150px", height: "auto" }}
                    src="./logo.jpg"
                    alt="logo"
                />
            </div>
            <div className="">
                <p className="text-center text-roboto-700 fs-3">
                    Создать аккаунт
                </p>
            </div>
        </>
    )
}

export default Header