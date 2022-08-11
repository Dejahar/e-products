import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import users from "../../assets/Data/users";
import { AuthContext } from "../../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { login, userLogged } = useContext(AuthContext);
  let navigate = useNavigate();

  const onSubmit = () => {
    if (!userLogged()) {
      if ( users.find( (user) => userData.email === user.email && userData.password === user.password ) )
      {
        login(userData.email, userData.password);
        navigate("/checkout", { replace: true });
      }
    } else navigate("/checkout", { replace: true });
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <img
        className="img-thumbnail rounded-pill w-50"
        src="./img/teniente/promo.jpg"
        alt="Logo"
      ></img>{" "}
      <Form className="d-flex flex-column text-center">
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label> Email Address </Form.Label>{" "}
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          ></Form.Control>{" "}
          <Form.Text className="text-dark">
            Your email is public and you will be scammed{" "}
          </Form.Text>{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label> Password </Form.Label>{" "}
          <Form.Control
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