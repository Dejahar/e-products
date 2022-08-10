import { Modal, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartList from "../CartList/CartList";
import CounterValue from "../CounterValue/CounterValue";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

const CartModal = ({ myCart, setItems }) => {
  let navigate = useNavigate();

  const { userLogged } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const goToLogin = () => {
    if (!userLogged()) {
      navigate("../login", { replace: true });
    } else navigate("../checkout", { replace: true });

    handleClose();
  };

  return (
    <>
      <Button variant="Light" onClick={handleShow}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAs9JREFUSEullzF6EzEQhf+hhzgnSCipSEcZJycIJ4A0yUcVu4Mq6aCLU/HhhuQEcALslHShoiQ5AQH6DN/syuuRVvJuQI13tdJo9Oa9J1lImwAK4af66p9b43uOyC2TidW9VDOpNbSUctxvb/1aK97/JAfipm8KbOiy47LOKIN9qT6+v5pWnut2LCegx27uLbADXJXileotqNFkZfNQnwDH9Qabbc9Bdjzb7gFwnpYOhJCZbIJuhpc94ChAbQvPu/NPpNAhlza56owGwM+w8AXoy6jepSxitHpDnQ48B16EzmH08X54L/h5I3Dt+ZbNTGCoMHO87pZdJqGkawxMqpgl/Yd+Y/TTPirpBqEasQ8YkhWHm5aZbLX9uJRzrMtQ0jFaSW4LOO2AZR3htrLk5WJZnAYo18BaLmCYsQMyBx0izBoBt8NdAIGkyY4LhjAR9Kg2hCbaL2cso/C8hTAJC9vzWuIiz4HPjRF21wbT9o/kiLoEGZYcSmCusO1SvQHMkiNAutkKZiDbbsfm45HEEgmH8Qtv4gxllNp3SU4+uz2FT46FRpDaw4UxKlegBu9psFt7HjjrfQwVVyIixwuXsbeJG5ks7SCxHRoCle6T9i0wPlq2bZkNOnE9FKpDJKP7kZPTxCBIar+PcJ4eV/XCKxnWBHL+vZoWSbh1wI7YqLkde3MoZSIT0MWp5S5nGWOplzkTGCVSbPbat8YLaMoHRry+xY2O07acSuaeKaigB0p1bL4H/rTLJA8FfaUVvDL19f4XOS248RZ4HSCaCexmrlVfwpXJhr0D3rSKq8abHuRa8hsXVFTQB9Hdqkbozh0+Jq/dHBW7Tqd0zgHwIXROBQ7rHUc1se82ztohMM39O4h23MO3LdgThEcoX1s7WSbxDOE3Kt8dWiU5lbVZFJcz/RVJZAJL5gaSHZbLu+VQq10lNZAO0+r+A5dqJHfLbeubv4SUBzKp5BKTAAAAAElFTkSuQmCC"
          alt="cart"
        />
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList myCart={myCart} setItems={setItems}></CartList>
        </Modal.Body>
        <Modal.Footer>
          <CounterValue myCart={myCart} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={goToLogin}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
