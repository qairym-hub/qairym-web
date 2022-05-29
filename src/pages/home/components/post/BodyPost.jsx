import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'

const BodyPost = (
    {
        text,
        links
    }
) => {
    const [open, setOpen] = useState(false)
    const lorem_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  software like Aldus PageMaker including versions of Lorem Ipsum."

    return (
        <>
            <div className="px-4">
                {open && (
                    <div>
                        <p
                            style={{
                                whiteSpace: "pre-line",
                                margin: "0",
                                padding: "0"
                            }}
                        >
                            {text}
                        </p>
                        <div className="py-4">
                            {links.map(
                                (link) => {
                                    return (
                                        <div className="d-flex align-items-center">
                                            <Icon.Link45deg
                                                size="20"
                                                className="text-primary"
                                            />
                                            <div className="d-inline mx-1"></div>
                                            <span
                                                style={{
                                                    fontSize: "15px",
                                                    cursor: "pointer",
                                                }}
                                                className="text-primary text-roboto-500"
                                            >
                                                {link}
                                            </span>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div
                className="mt-auto pb-4"
            >
                <div
                    style={{ cursor: "pointer" }}
                    className="text-muted px-4"
                    onClick={() => setOpen(!open)}
                >
                    <div>
                        {open ? (
                            <div className="d-flex align-items-center">
                                <Icon.ArrowUpCircleFill
                                    color="gray"
                                    size="18"
                                />
                                <div className="d-inline mx-1"></div>
                                <span
                                    style={{ fontSize: "15px" }}
                                >
                                    Свернуть
                                </span>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center">
                                <Icon.ArrowDownCircleFill
                                    color="gray"
                                    size="18"
                                />
                                <div className="d-inline mx-1"></div>
                                <span
                                    style={{ fontSize: "15px" }}
                                >
                                    Подробнее
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyPost