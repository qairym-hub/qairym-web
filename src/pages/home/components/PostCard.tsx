import React from 'react'
import { User } from '../../../services/types'
import BodyPost from './BodyPost'
import HeaderPost from './HeaderPost'
import SubHeadPost from './SubHeadPost'


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

    return (
        <>
            <div
                style={{ minHeight: "200px", width: "400px" }}
                className="border rounded-extra"
            >
                <HeaderPost 
                    title={title}
                />
                <SubHeadPost 
                    username={user.username} 
                    date={date} 
                />
                <BodyPost
                    text={text}
                    links={links}
                />
            </div>
        </>
    )
}

export default PostCard