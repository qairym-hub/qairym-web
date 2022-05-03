import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'

interface BodyPostProps {
    text: string,
    links: string[],
}

const BodyPost: React.FunctionComponent<BodyPostProps> = (
    {
        text,
        links
    }
) => {
    const [open, setOpen] = useState<boolean>(false)
    const lorem_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  software like Aldus PageMaker including versions of Lorem Ipsum."

    return (
        <>
            <div className="px-4 pb-3">
                    {open ? (
                        <div>
                            <p
                                style={{ whiteSpace: "pre-line" }}
                                className="mt-2"
                            >
                                {lorem_text} {text}
                            </p>
                            <div>
                                {links.map((link) => {
                                    return (
                                        <div className="d-flex align-items-center">
                                            <Icon.Link45deg
                                                size="20"
                                                className="text-primary"
                                            />
                                            <div className="d-inline mx-1"></div>
                                            <span
                                                style={{ fontSize: "15px", cursor: "pointer" }}
                                                className="text-primary text-roboto-500"
                                            >
                                                {link}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mt-3">
                                <span>
                                    <Icon.ArrowsCollapse
                                        color='gray'
                                        size="15"
                                    />
                                </span>
                                <div className="d-inline mx-1"></div>
                                <span
                                    style={{ fontSize: "15px", cursor: "pointer" }}
                                    className="text-muted"
                                    onClick={() => setOpen(false)}
                                >
                                    Свернуть
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div
                            style={{ cursor: "pointer" }}
                            className="text-muted mt-2"
                        >
                            <span
                                style={{ fontSize: "15px" }}
                                className=""
                                onClick={() => setOpen(true)}
                            >
                                Подробнее...
                            </span>
                        </div>
                    )}
                </div>
        </>
    )
}

export default BodyPost