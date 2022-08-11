import { Button } from "react-bootstrap";

const WishlistBtn = ({ product, myWishList, setWishList }) => {
  const addToWishList = () => {
    console.log("wtf");
    myWishList.find((e) => e.id  === product.id)
      ? setWishList(myWishList.filter((e) => e.id !== product.id))
      : setWishList([product, ...myWishList]);
  };

  return (
    <>
      <Button type="checkbox" variant="outline-danger" onClick={addToWishList}>
        {myWishList.find((e) => e.id === product.id) ? (
          <i className="bi bi-heart-fill"></i>
        ) : (
          <i className="bi bi-heart"></i>
        )}
      </Button>
    </>
  );
};

export default WishlistBtn;