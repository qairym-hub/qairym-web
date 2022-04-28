import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PostCard from './components/PostCard'
import UserCard from './components/UserCard'

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <div
                style={{ paddingTop: "50px" }}
                className=""
            >
                <Container>
                    <div className="my-4">
                        <UserCard
                            username="talgatulyzh"
                        />
                    </div>
                    <div className="mt-5">
                        <p className="text-roboto-700 fs-5 mb-2">Моя лента</p>
                        <div>
                            <Container>
                                <Row lg={3}>
                                    <Col className="mt-4">
                                        <PostCard
                                            user={{
                                                username: 'aitu_charity',
                                                photo_url: 'none',
                                                location: 'Nur-Sultan'
                                            }}
                                            title="Сбор средств для ремонта детского дома"
                                            text="Тело"
                                            links={["t.me/charity_meeting", "instagram.com/char_meet"]}
                                            date={"25.04.2022"}
                                            bg="#DAE5D0"
                                        />
                                    </Col>
                                    <Col className="mt-4">
                                        <PostCard
                                            user={{
                                                username: 'astanachar',
                                                photo_url: 'none',
                                                location: 'Nur-Sultan'
                                            }}
                                            title="Субботник на территории Expo"
                                            text="Тело"
                                            links={["t.me/charity_meeting"]}
                                            date={"28.04.2022"}
                                            bg="#E4D1B9"
                                        />
                                    </Col>
                                    <Col className="mt-4">
                                        <PostCard
                                            user={{
                                                username: 'sham_charity',
                                                photo_url: 'none',
                                                location: 'Nur-Sultan'
                                            }}
                                            title="Шаму на лечение"
                                            text="Тело"
                                            links={["t.me/charity_meeting"]}
                                            date={"25.04.2022"}
                                            bg="#BAABDA"
                                        />
                                    </Col>
                                    <Col className="mt-4">
                                        <PostCard
                                            user={{
                                                username: 'sham_charity',
                                                photo_url: 'none',
                                                location: 'Nur-Sultan'
                                            }}
                                            title="Шаму на лечение"
                                            text="Тело"
                                            links={["t.me/charity_meeting"]}
                                            date={"25.04.2022"}
                                            bg="#BAABDA"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HomePage