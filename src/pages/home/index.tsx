import React from "react";
import {
    Container,
    Row,
    Col,
} from "react-bootstrap";
import PostCard from "./components/PostCard";
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
            <div
                style={{ paddingTop: "50px" }}
                className=""
            >
                <Container>
                    {/* <div className="my-4">
                        <Container>
                            <UserCard username="talgatulyzh" />
                        </Container>
                    </div> */}
                    <div className="mt-5">
                        <Container className="d-flex justify-content-start">
                            <Row>
                                <Col>
                                    <Container>
                                        <Col className="pt-4 p-absolute">
                                            <UserCard 
                                                username="talgatulyzh"
                                            />
                                        </Col>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        {posts.map((post) => {
                                                return (
                                                    <Col className="p-4">
                                                        <PostCard
                                                            user={
                                                                post.user
                                                            }
                                                            title={
                                                                post.title
                                                            }
                                                            text={
                                                                post.text
                                                            }
                                                            links={
                                                                post.links
                                                            }
                                                            date={
                                                                post.date
                                                            }
                                                        />
                                                    </Col>
                                                );
                                            }
                                        )}
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default HomePage;
