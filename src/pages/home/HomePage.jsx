import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import {
    Container,
    Spinner,
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
import { Redirect } from "react-router-dom";
import authController from "../../services/api/auth.controller";
import userController from "../../services/api/user.controller";

const HomePage = (props) => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({ userId: Number, username: String, followers: Number, followings: Number })
    const [postsLoading, setPostsLoading] = useState(false)
    const [userLoading, setUserLoading] = useState(false)

    const fetchPosts = async () => {
        setPostsLoading(true)
        const res = await axios.get(
            `https://qairhub.herokuapp.com/api/post/find`
        )

        setPosts(res.data)
        setPostsLoading(false)
    }

    const fetchUser = async () => {
        setUserLoading(true)
        const user = await authController.loadByToken(props.token)
        const followers = await userController.getFollowers(user.data.userId)
        const followings = await userController.getFollowings(user.data.userId)

        setUser({
            userId: user.data.userId
        })

        setUserLoading(false)
    }

    useEffect(() => {
        fetchPosts()
        fetchUser()
    }, [])

    return (
        <>
            {!props.authenticated && (
                <Redirect push to="/login" />
            )}
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
                                        user={
                                            {
                                                username: "zhoma",
                                                city: "Shymkent",
                                                followers: 1,
                                                followings: 27
                                            }
                                        }
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
                                {posts.length === 0 ? (
                                    <div style={{ marginTop: "150px" }}>
                                        <Spinner
                                            className="mt-4"
                                            animation="border"
                                            role="status" 
                                        />
                                    </div>
                                ) : (
                                    <>
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
                                    </>
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

const mapState = (state) => {
    return {
      authenticated: state.authReducer.authenticated,
      token: state.authReducer.token.accessToken
    }
}
  
const mapDispatch = (dispatch) => {
    return {
      login: (auth) => {
        console.debug(auth)
        return dispatch({
          type: 'SIGNIN_SUCCESS',
          payload: {
            auth
          }
        })
      }
    }
  }
  
  export default connect(
    mapState,
    mapDispatch
  )(HomePage)
