import moment from "moment";
import "moment/locale/ru";
import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { User } from '../../../../services/types'
import BodyPost from './BodyPost'
import HeaderPost from './HeaderPost'
import SubHeadPost from './SubHeadPost'

const lorem_text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  software like Aldus PageMaker including versions of Lorem Ipsum.";

interface PostCardProps {
    user: User;
    title: string;
    text: string;
    links: string[];
    date: string;
    bg?: string;
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
                style={{
                    minHeight: "200px",
                    maxWidth: "425px",
                    width: "100%",
                }}
                className="d-flex flex-column border rounded-extra background-white"
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
    );
};

export default PostCard;
