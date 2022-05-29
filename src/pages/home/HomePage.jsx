import React, {
  useEffect,
  useState,
  useRef,
  useFetch,
  useCallback,
} from "react";
import { connect } from "react-redux";
import axios from "axios";
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
import AddPostModal from "./components/addPostModal/AddPostModal";

const HomePage = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [user, setUser] = useState({
    userId: Number,
    username: String,
    followers: Number,
    followings: Number,
  });
  const [postsLoading, setPostsLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const loader = useRef();
  const fetchPosts = async () => {
    setPostsLoading(true);
    const res = await axios.get(
      `https://qairhub.herokuapp.com/api/post/find?pageNumber=${page}&pageSize=10&search=`
    );

    setPosts(res.data);
    setPostsLoading(false);
  };

  const fetchUser = async () => {
    setUserLoading(true);
    const user = await authController.loadByToken(props.token);
    const followers = await userController.getFollowers(
      user.userId,
      props.token
    );

    const followings = await userController.getFollowings(
      user.userId,
      props.token
    );

    setUser({
      userId: user.userId,
      username: user.username,
      followers: followers.followersCount,
      followings: followings.followingsCount,
    });
    setUserLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);

  return (
    <>
      {!props.authenticated && <Redirect push to="/login" />}
      <div>
        <Container className="mt-3">
          <div className="d-flex">
            <div className="row">
              <div className="col-lg-4">
                <div className="m-3">
                  <div>
                    <FadeIn transitionDuration={500}>
                      <UserCard
                        user={{
                          username: user.username,
                          city: "Shymkent",
                          followers: user.followers,
                          followings: user.followings,
                        }}
                        loading={userLoading}
                      />
                    </FadeIn>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
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
                              delay={100 + index * 150}
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
                        );
                      })}
                      <div className="row">
                        <div
                          ref={loader}
                          className="col-12 mt-5 py-5 text-center"
                        >
                          <span>...loading...</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-2">
                <div className="border rounded-extra background-white p-3">
                  <span className="text-muted">
                    /*
                    <br />
                    <span className="px-3">no content yet</span>
                    <br />
                    */
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div> */}
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
          {/* </div> */}
          <AddPostModal />
        </Container>
      </div>
    </>
  );
};

const mapState = (state) => {
  return {
    authenticated: state.authReducer.authenticated,
    token: state.authReducer.token.accessToken,
    show: state.componentReducer.show,
  };
};

const mapDispatch = (dispatch) => {
  return {
    login: (auth) => {
      console.debug(auth);
      return dispatch({
        type: "SIGNIN_SUCCESS",
        payload: {
          auth,
        },
      });
    },
  };
};

export default connect(mapState, mapDispatch)(HomePage);
