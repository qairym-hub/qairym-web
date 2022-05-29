import React from 'react'

const CreateAccount = () => {

    return (
        <>
            {/* <div
        style={{ width: "350px" }}
        className="border rounded-extra p-4"
        >
            <span
                style={{}}
                className=""
            >
                Нет аккаунта?
            </span>
            <Link
                href={"/register"}
            >
                Создать аккаунт
            </Link>
        </div> */}
            <div className="d-flex justify-content-center mt-3">
                <span
                    style={{ fontSize: "15px" }}
                    className="text-muted"
                >
                    Нет аккаунта?{' '}
                </span>
            </div>
        </>
    )
}

export default CreateAccount