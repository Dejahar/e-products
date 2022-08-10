import { Button } from "react-bootstrap";

const RemoveFromWishList = ({ product, myWishList, setWishList }) => {
  const removeFromWishList = () => {
    setWishList(myWishList.filter((e) => e !== product));
  };
  return (
    <Button variant="danger" onClick={removeFromWishList}>
      Remove
    </Button>
  );
};

export default RemoveFromWishList;