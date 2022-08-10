import ListItem from "../ListItem/ListItem"

const CartList = ({myCart, setItems}) => {
  return (
    <ul className='list-group'>
        {
            myCart.map((product) => (
            <ListItem product={product} key={product.id} myCart={myCart} setItems={setItems} />))
        }
    </ul>
  )
}

export default CartList