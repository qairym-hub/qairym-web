import moment from 'moment'
import "moment/locale/ru"
import React, { useState } from 'react'
import { Badge } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { User } from '../../../services/types'

const lorem_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  software like Aldus PageMaker including versions of Lorem Ipsum."

interface PostCardProps {
    user: User,
    title: string,
    text: string,
    links: string[],
    date: string,
    bg?: string
}

const PostCard: React.FunctionComponent<PostCardProps> = (
    {
        user,
        title,
        text,
        links,
        date,
        bg = 'white'
    }
) => {
    const [open, setOpen] = useState<boolean>(false)

    const getRelativeDate = (date: string) => {
        moment()
        return moment(date, "DD.MM.YYYY").fromNow()
    }

    return (
        <>
            <div
                style={{ minHeight: "200px", width: "400px", backgroundColor: bg }}
                className="pt-4 pb-3 px-4 border rounded-extra"
            >
                <div>
                    <span className="text-roboto-300 fs-5">
                        {title}
                    </span>
                    <div className="d-flex align-items-center mt-2">
                        <span
                            style={{ fontSize: "15px" }}
                            className="text-roboto-500"
                        >
                            {user.username}
                        </span>
                        <span
                            style={{ fontSize: "10px" }}
                            className="text-muted mx-2"
                        >
                            • {getRelativeDate(date)}
                        </span>
                    </div>
                    <div className="d-flex align-items-start">
                        <span
                            style={{ fontSize: "10px" }}
                            className="text-muted"
                        >
                            гум. помощь
                        </span>
                        <span
                            style={{ fontSize: "10px" }}
                            className="text-roboto-500 text-muted mx-1"
                        >
                            /
                        </span>
                        <span
                            style={{ fontSize: "10px" }}
                            className="text-muted"
                        >
                            сборы
                        </span>
                    </div>
                </div>
                <div>
                    {open ? (
                        <div>
                            <p className="mt-2">
                                {lorem_text} {text}
                            </p>
                            <div>
                                {links.map((link) => {
                                    return (
                                        <div>
                                            <span>
                                                <Icon.Link45deg
                                                    color='gray'
                                                    size="20"
                                                />
                                            </span>
                                            <div className="d-inline mx-1"></div>
                                            <span
                                                style={{ fontSize: "15px" }}
                                                className="text-muted"
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
            </div>
        </>
    )
}

export default PostCard