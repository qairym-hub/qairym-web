import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    FloatingLabel,
    Form,
    FormGroup,
    FormLabel,
    Button,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import FadeIn from "react-fade-in/lib/FadeIn";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import PostCard from "./components/post/PostCard";
import SideBar from "./components/sidebar/SideBar";
import UserCard from "./components/usercard/UserCard";

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

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])

    const fetchPosts = async () => {
        const res = await axios.get(
            `https://qairhub.herokuapp.com/api/post/find`
        )

        setPosts(res.data)
    }

    const fetchUser = async () => {
        const res = await axios.get(
            `https://qairhub.herokuapp.com/api/user/find/username/`
        )

    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <div className="p-4">
                <Container style={{ position: "relative" }} fluid>
                    <div className="d-flex justify-content-center">
                        <div 
                            style={{ position: "fixed", left: "18%" }}
                            className="p-3"
                        >
                            <div>
                                <FadeIn transitionDuration={500}>
                                    <UserCard 
                                        username="username"
                                    />
                                </FadeIn>
                            </div>

                            {/* <div className="mt-5">
                                <FadeIn
                                    delay={250} 
                                    transitionDuration={500}
                                >
                                    <SideBar />
                                </FadeIn>
                            </div> */}
                        </div>

                        <div>
                            {/* <div>
                                <Form.Group className="d-flex">
                                    <Form.Control 
                                        className="rounded-extra"
                                        type="text"
                                        placeholder="Найти"
                                        size="lg"
                                    />
                                    <div className="px-1"></div>
                                    <Button
                                        style={{ aspectRatio: "1/1" }}
                                        className="rounded-extra d-flex align-items-center"
                                    >
                                        <Icon.PlusCircleFill size="20" />
                                    </Button>
                                </Form.Group>
                            </div> */}

                            {/* <div className="px-3 py-2">
                                <div className="d-flex justify-content-end">
                                    <Button
                                        style={{ aspectRatio: "1/1" }}
                                        className="rounded-extra d-flex align-items-center"
                                    >
                                        <Icon.PlusCircleFill size="20" />
                                    </Button>
                                </div>
                            </div> */}

                            <div>
                                <div className="my-3">
                                    <span className="text-roboto-500 fs-4">
                                        Лента объявлений
                                    </span>
                                </div>
                                {posts.map((post, index) => {
                                        return (
                                            <div key={index} className="mb-3">
                                                <FadeIn
                                                    delay={100 + (index * 150)}
                                                    transitionDuration={500}
                                                >
                                                    <PostCard
                                                        username={post.author.username}
                                                        title={post.title}
                                                        text={post.text}
                                                        links={["t.me/chat", "instagram.com/charchat"]}
                                                        date={post.createdAt}
                                                    />
                                                </FadeIn>

                                            </div>
                                        )
                                    }
                                )}
                            </div>

                        </div>

                        <div 
                            style={{ position: "fixed", left: "65%" }}
                            className="p-3"
                        >
                            <div className="border rounded-extra background-white p-3">
                                <span className="text-muted">
                                    /*<br /><span className="px-3">no content yet</span><br />*/
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default HomePage;
