import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import users from "../../assets/Data/users";
import { AuthContext } from "../../auth/context/AuthContext"

function LoginPage() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const {login} = useContext(AuthContext);

  const onSubmit = () => {
    if ( users.find( (user) => userData.email === user.email && userData.password === user.password )
    ) {
      login(userData.email , userData.password);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <img
        className="rounded img-thumbnail rounded-pill"
        src="./img/teniente/promo.jpg"
        alt="Logo"
      ></img>{" "}
      <Form className="d-flex flex-column text-center">
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label> Email Address </Form.Label>{" "}
          <Form.Control
            type="email"
            placeholder="Enter email"
            onInputChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          ></Form.Control>{" "}
          <Form.Text className="text-muted">
            Your email is public and you will be scammed{" "}
          </Form.Text>{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label> Password </Form.Label>{" "}
          <Form.Control
            type="password"
            placeholder="Enter password"
            onInputChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          ></Form.Control>{" "}
        </Form.Group>
        <Button
          className="btnFormSend"
          type="submit"
          variant="outline-success"
          onClick={onSubmit}
        >
          Login
        </Button>{" "}
      </Form>{" "}
    </div>
  );
}
export default LoginPage;