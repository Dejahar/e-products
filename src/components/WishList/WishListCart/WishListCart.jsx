import { Card } from "react-bootstrap";
import RemoveFromWishList from "../RemoveFromWishList/RemoveFromWishList";
import BuyFromWishList from "../BuyFromWishList/BuyFromWishList";

const WishListCart = ({ myWishList, setWishList, myCart, setItems }) => {
  return (
    <ul className="list-group">
      {myWishList.map((product) => (
        <div>
          <li className="list-group-item d-flex justify-content-center" >
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.url} />
              <Card.Body>
                <Card.Title variant="right">{product.title}</Card.Title>
                <Card.Text>
                  {product.price}€/ud. {product.purity}% (pureza)
                  <p className="card-text">Origin: {product.origin}</p>
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <BuyFromWishList
                    product={product}
                    myWishList={myWishList}
                    setWishList={setWishList}
                    myCart={myCart} setItems={setItems}
                  />
                  <RemoveFromWishList
                    product={product}
                    myWishList={myWishList}
                    setWishList={setWishList}
                  />
                </div>
              </Card.Body>
            </Card>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default WishListCart;
