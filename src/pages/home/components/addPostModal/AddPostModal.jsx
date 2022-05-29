import { useEffect, useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import authController from "../../../../services/api/auth.controller";
import postController from "../../../../services/api/post.controller";

const AddPostModal = () => {
  const show = useSelector((state) => state.componentReducer.show);
  const token = useSelector((state) => state.authReducer.token.accessToken);
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const res = await authController.loadByToken(token);
    setUser(res);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: {
        show,
      },
    });
    setTitle("");
    setText("");
  };
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // console.log(user);
    const post = {
      title: title,
      text: text,
      author: {
        userId: user.userId,
      },
    };
    postController.save(post, token);
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="false"
        onEscapeKeyDown={handleClose}
        onHide={handleClose}
        dialogClassName="rounded"
        size="md"
      >
        <Modal.Header>
          <Modal.Title>Creating a post</Modal.Title>
        </Modal.Header>

        <Modal.Body className="rounded">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel
                controlId="floatingInput"
                label="Title"
                onChange={handleTitleChange}
              >
                <Form.Control
                  type="text"
                  placeholder="Title"
                  className="rounded-extra"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <FloatingLabel
                controlId="floatingInput"
                label="Text"
                onChange={handleTextChange}
              >
                <Form.Control
                  type="text"
                  placeholder="Text"
                  className="rounded-extra"
                  as="textarea"
                  rows={3}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AddPostModal;
