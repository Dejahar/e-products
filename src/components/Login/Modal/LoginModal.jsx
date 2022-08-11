import { Modal, Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../../assets/Data/users";
import { AuthContext } from "../../../auth/context/AuthContext";
import "./LoginModal.css";

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { login, logged, user, authState } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();

  const onSubmit = (e) => {
    console.log("Before Login: ", logged, " ", user, "AuthState", authState);
    if (
      users.find( (user) => userData.email === user.email && userData.password === user.password ) )
      {
        login(userData.email, userData.password);
        console.log("After Login: ", logged, " ", user, "AuthState", authState);
        navigate("/products", { replace: true });
      }
    e.preventDefault();
  };

  return (
    <>
      <Button variant="Light" onClick={handleShow}>
        <img
          className=""
          src="../img/login_black.png"
          value="Login"
          alt="Login"
        />
      </Button>
      <Modal size="sm-down" show={show} onHide={handleClose}>
        <div className="modalPaper">
          <Modal.Header style={{ border: "none" }} closeButton>
            <Modal.Title className="title">Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form className="d-flex flex-column text-center">
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label> Email Address </Form.Label>{" "}
                <Form.Control
                  className="formInput"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                ></Form.Control>{" "}
                <Form.Text className="text-muted">
                  Your email is public and you will be scammed{" "}
                </Form.Text>{" "}
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label className="p-3 mb-2 text-dark">
                  {" "}
                  Password{" "}
                </Form.Label>{" "}
                <Form.Control
                  className="formInput"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                ></Form.Control>{" "}
              </Form.Group>
              <Button
                className="btnFormSend"
                type="submit"
                variant="outline-dark"
                size="lg"
                onClick={onSubmit}
              >
                Login
              </Button>{" "}
            </Form>{" "}
          </Modal.Body>
          <Modal.Footer style={{ border: "none" }}></Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;