import React from 'react'
import { Container } from 'react-bootstrap'
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
                    <div>
                        <p className="text-roboto-700 fs-5 mb-2">Моя лента</p>
                        <div>
                            <PostCard
                                user={{
                                    username: 'sham1ko',
                                    photo_url: 'none',
                                    location: 'Nur-Sultan'
                                }}
                                title="Заголовок #1"
                                text="Тело"
                                links={["t.me/sham1ko"]}
                                date={"25.05.2022"}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HomePage