import React from 'react'
import { Badge } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { User } from '../../../services/types'

interface PostCardProps {
    user: User,
    title: string,
    text: string,
    links: string[],
    date: string
}

const PostCard: React.FunctionComponent<PostCardProps> = (
    {
        user,
        title,
        text,
        links,
        date
    }
) => {

    return (
        <>
            <div
                style={{ width: "400px", backgroundColor: '#F8ECD1' }}
                className="pt-3 px-4 border rounded-extra"
            >
                <div>
                    <div>
                        <span className="text-roboto-500">
                            {user.username}
                        </span>
                        <span
                            style={{ fontSize: "15px" }}
                            className="text-muted mx-2"
                        >
                            • {date}
                        </span>
                    </div>
                    <div>
                        <Badge
                            pill
                        >
                            категория
                        </Badge>
                        <div className="mx-1 d-inline"></div>
                        <Badge
                            pill
                        >
                            мероприятия
                        </Badge>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-roboto-300">
                        {title}
                    </span>
                    <p className="mt-2">
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default PostCard