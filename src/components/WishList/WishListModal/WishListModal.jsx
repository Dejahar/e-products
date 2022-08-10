import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import WishListCart from "../WishListCart/WishListCart";

const WishListModal = ({ auth, myWishList, setWishList, myCart, setItems}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <img src="../img/wishlist_50.png" alt="wishList" />
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>WishList</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WishListCart myWishList={myWishList} setWishList={setWishList} myCart={myCart} setItems={setItems}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WishListModal;
