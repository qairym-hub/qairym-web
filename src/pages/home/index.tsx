import React from "react";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import PostCard from "./components/post/PostCard";
import UserCard from "./components/UserCard";

const posts = [
    {
        user: {
            username: "aitu_charity",
            photo_url: "",
            location: "Nur-Sultan",
        },
        title: "Сбор средств для ремонта детского дома",
        text: "",
        links: [
            "t.me/charity_meeting",
            "instagram.com/char_meet",
        ],
        date: "25.04.2022",
    },
    {
        user: {
            username: "astanaCharity",
            photo_url: "",
            location: "Nur-Sultan",
        },
        title: "Субботник на территории Expo",
        text: "",
        links: [
            "t.me/astanachari",
            "instagram.com/ast.charity",
        ],
        date: "01.05.2022",
    },
    {
        user: {
            username: "green_volunteers",
            photo_url: "",
            location: "Nur-Sultan",
        },
        title: "Поздравление и помощь ветеранам войны",
        text: "",
        links: ["t.me/greenvols"],
        date: "09.05.2022",
    },
];

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <div className="p-4">
                <div className="d-flex justify-content-center p-4">
                    <UserCard 
                        username="talgatulyzh"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        {posts.map((post) => {
                                return (
                                    <div className="p-3">
                                        <PostCard
                                            user={post.user}
                                            title={post.title}
                                            text={post.text}
                                            links={post.links}
                                            date={post.date}
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
