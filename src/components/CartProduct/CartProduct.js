import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Counter from "../Counter/Counter";

const CartProduct = ({ product, myCart, setItems }) => {
  const RemoveProduct = () => {
    setItems(myCart.filter((element) => element !== product));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
          <Card.Title variant="right">{product.title}</Card.Title>
          <Card.Text>
            Price: {product.price * product.quantity} €<br />
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Counter product={product} myCart={myCart} setItems={setItems} />
            <Button variant="danger" onClick={RemoveProduct}>
              Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartProduct;