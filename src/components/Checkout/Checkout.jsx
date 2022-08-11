import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { countries } from "../../assets/Data/Countries";
import { AuthContext } from "../../auth/context/AuthContext";
import Card from "react-bootstrap/Card";
import toast from 'react-hot-toast';

const Checkout = () => {
  let navigate = useNavigate();
  const { cartList } = useContext(AuthContext);
  const myCart = cartList();

  const notify = () => toast.success('Purchase Successfull')

  const goBack = () => {
    navigate("../", { replace: true });
  };

  const onBuy = () => {
    navigate("../", { replace: true });
    localStorage.removeItem('myCart');
    notify();
  };

  return (
    <>
      <div className="d-flex flex-row text-center justify-content-center pt-5">
        <div>
          <Form className="d-flex flex-column text-center">
            <Form.Group className="mb-3" controlId="Address">
              <Form.Label> Address </Form.Label>{" "}
              <Form.Control
                type="email"
                placeholder="122 Example St"
                width={10}
              ></Form.Control>{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label> country </Form.Label>{" "}
              <Form.Control
                type="countries"
                placeholder="Select Country"
                options={countries}
              ></Form.Control>{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="town_city">
              <Form.Label> Town/City </Form.Label>{" "}
              <Form.Control
                type="town_city"
                placeholder="Select Country"
                options={countries}
              ></Form.Control>{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="county_state">
              <Form.Label> County/State/Province/Territory </Form.Label>{" "}
              <Form.Control
                type="county_state"
                placeholder="Search ..."
              ></Form.Control>{" "}
            </Form.Group>
            <Form.Group className="mb-3" controlId="postal_zip_code">
              <Form.Label> Zip/Postal </Form.Label>{" "}
              <Form.Control
                type="postal_zip_code"
                placeholder="00000"
              ></Form.Control>{" "}
            </Form.Group>
            <Button
              className="btnFormSend"
              type="submit"
              variant="outline-success"
              onClick={onBuy}
            >
              Checkout
            </Button>{" "}
            <Button variant="dark" onClick={goBack}>
              Back
            </Button>
          </Form>{" "}
        </div>

        <div>
          <ul className="list-group">
            {myCart.map((product) => (
              <li className="list-group-item d-flex justify-content-center">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src={product.url} />
                  <Card.Body>
                    <Card.Title variant="right">{product.title}</Card.Title>
                    <Card.Text>
                      Price: {product.price * product.quantity} €<br />
                    </Card.Text>
                    <div className="d-flex justify-content-around"></div>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Checkout;
