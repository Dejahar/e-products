import CartProduct from "../CartProduct/CartProduct"


const ListItem = ({product, myCart, setItems}) => {
  return (
    <li className="list-group-item d-flex justify-content-center">
      <CartProduct product={product} myCart={myCart} setItems={setItems}/></li>
  )
}

export default ListItem