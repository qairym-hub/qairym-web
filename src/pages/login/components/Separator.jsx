import React from 'react'

const Separator = () => {
    return (
        <>
            <div
                style={{ textAlign: "center", borderBottom: "1px solid lightgray", lineHeight: "0.1em", margin: "10px 0 10px" }}
                className="w-100 text-center"
            >
                <span
                    style={{ backgroundColor: "#f6f8fa", padding: "0 10px", color: "black" }}
                    className=""
                >
                    или используйте эл. почту
                </span>
            </div>
        </>
    )
}

export default Separator