import LoginModal from "../Login/Modal/LoginModal";
import WishListModal from "../WishList/WishListModal/WishListModal";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { Nav, Button } from "react-bootstrap";

export const UserArea = ({ myCart, setItems, myWishList, setWishList }) => {
  const { logout, userLogged } = useContext(AuthContext);

  const userLogout = () => {
    logout();
  };

  return (
    <>
      {userLogged() ? (
        //USER LOGIN/LOGOUT NAV
        <Nav>
          <Button variant="light">
            <img src="../img/user_50.png" alt="User" />
          </Button>
          <WishListModal
            myWishList={myWishList}
            setWishList={setWishList}
            myCart={myCart}
            setItems={setItems}
          />
          ;
          <Button onClick={userLogout} size="sm" variant="primary">
            Logout
          </Button>
        </Nav>
      ) : (
        <>
          <LoginModal /> <Button style={{ display: "none" }} />{" "}
        </>
      )}
    </>
  );
};
