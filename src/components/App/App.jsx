import "./App.css";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import CartModal from "../Modal/CartModal";
import { UserArea } from "../UserArea/UserArea";

function Dashboard() {
  const [myCart, setItems] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );
  const [myWishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("myWishList")) || []
  );

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(myCart));
  }, [myCart]);

  useEffect(() => {
    localStorage.setItem("myWishList", JSON.stringify(myWishList));
  }, [myWishList]);

  const links = [
    { title: "Products", url: "products" },
    { title: "Shops", url: "shops" },
    { title: "About", url: "about" },
    { title: "Contacts", url: "contacts" },
  ];

  return (
    <div className="bg">
      <Navbar expand="lg">
        <Container>
          <Navbar>
            <img src="../img/teniente/promo.jpg" alt="logo-img" width="70rem" />
          </Navbar>
          <Nav className="me-auto">
            {links.map((link) => (
              <Link className="NavLink" to={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
            <CartModal myCart={myCart} setItems={setItems} />
          </Nav>
          <UserArea
            myCart={myCart}
            setItems={setItems}
            myWishList={myWishList}
            setWishList={setWishList}
          />
        </Container>
      </Navbar>
      <Outlet context={[myCart, setItems, myWishList, setWishList]} />
    </div>
  );
}

export default Dashboard;