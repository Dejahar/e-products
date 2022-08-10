import AddButton from "../AddButton/AddButton"

const ProductCart = ({product , addProduct }) => {
  return (
    <div className="">
            <div className="card" key={product.id}>
                    <img className="card-img-top rounded" src={product.url} alt={product.title} />
                <div className="card-body ">
                    <h5 className="card-title text-justify">{product.title}</h5>
                    <p className="card-text">{product.price}€</p>
                    <AddButton
                    productData={product}
                    addProduct={addProduct}
                    key={product.title}
                    />
                </div>
            </div>
        </div>
  )
}

export default ProductCart