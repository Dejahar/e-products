import {Button} from  "react-bootstrap";

const BuyFromWishList = ({product, myWishList, setWishList, myCart, setItems}) => {
const buyFromWishList = () => {
    setWishList(myWishList.filter((e) => e !== product));
    product.quantity = 1;
    myCart.find((elem) => elem.id === product.id) ?? setItems([product, ...myCart]);
}

    return (
        <Button variant="secondary" onClick={buyFromWishList}>
          Add to cart
        </Button>)
}
export default BuyFromWishList;