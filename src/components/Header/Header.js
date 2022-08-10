import "./Header.css";
import CartModal from "../Modal/CartModal";
import Nav from '../Nav/Nav';

const Header = ({ myCart, RemoveItem, setItems}) => {
  return (
    <>
    <header className='HeaderContainer'>
    <img src="../img/img-logo.svg" alt="logo-img" width="70rem"/>
    <Nav />
    <CartModal myCart={myCart} RemoveItem={RemoveItem} setItems={setItems}  />
    </header>
    </>
  )
}

export default Header
