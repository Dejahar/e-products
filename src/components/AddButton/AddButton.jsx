const AddButton = ({ myCart, setItems, product }) => {
  const addItemToLocalStorage = () => {
    product.quantity = 1;
    myCart.find((elem) => elem.id === product.id) ?? setItems([product, ...myCart]);
  };
  return (
    <>
      <button onClick={addItemToLocalStorage} className="btn btn-primary">
        Add to cart
      </button>
    </>
  );
};

export default AddButton;
