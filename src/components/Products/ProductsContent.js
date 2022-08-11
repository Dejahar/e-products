import Products from "../../assets/Data/Harina.json";
import { Nav, ButtonGroup } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
import WishlistBtn from "../WishList/WishlistBtn/WishlistBtn";
import { useReducer, useEffect } from "react";
import "./ProductsContent.css";
import { Container, Pagination } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const ProductsContent = () => {

  const [myCart, setItems, myWishList, setWishList] = useOutletContext();
  const reducer = (state, action) => {
    switch (action.type) {
      case "setPageCount":
        return { ...state, pageCount: action.payload };
      case "setCurrentData":
        return { ...state, currentData: action.payload };
      case "setOffset":
        return { ...state, offset: action.payload };
      case "setActivePage":
        return { ...state, activePage: action.payload };
      default:
        throw new Error();
    }
  };

  const initialState = {
    data: Products,
    offset: 0,
    numberPerPage: 3,
    pageCount: 0,
    currentData: [],
    activePage: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "setCurrentData",
      payload: state.data.slice(
        state.offset,
        state.offset + state.numberPerPage
      ),
    });
  }, [state.data, state.numberPerPage, state.offset]);

  const handleClick = (e) => {
    const clickValue = parseInt(e.target.getAttribute("data-page"), 10);
    dispatch({
      type: "setOffset",
      payload: (clickValue - 1) * state.numberPerPage,
    });
    dispatch({
      type: "setActivePage",
      payload: clickValue,
    });
    dispatch({
      type: "setPageCount",
      payload: state.data.length / state.numberPerPage,
    });
  };

  // Pagination numbers
  const paginationItems = [];
  const amountPages = state.data.length / state.numberPerPage;
  for (let number = 1; number <= amountPages; number++) {
    paginationItems.push(
      <Pagination.Item onClick={handleClick}
        key={number}
        active={number === state.activePage}
        data-page={number}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Container className="row row-cols-3 g-4 m-0 justify-content-center">
        {state.currentData &&
          state.currentData.map((product, index) => (
            <div key={index} className="post">
              <Nav key={product.id}>
                <div className="card " key={product.id}>
                  <img
                    className="card-img-top rounded img-thumbnail bg-transparent"
                    src={product.url}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-justify">{product.title}</h5>
                    <p className="card-text">
                      {product.price}€/ud. {product.purity}% (pureza)
                    </p>
                    <p className="card-text">Origin: {product.origin}</p>

                    <ButtonGroup aria-label="Basic example">
                      <AddButton product={product} myCart={myCart} setItems={setItems} />
                    </ButtonGroup>
                    <WishlistBtn product={product} myWishList={myWishList} setWishList={setWishList} />
                  </div>
                </div>
              </Nav>
            </div>
          ))}

        <Pagination className="d-flex justify-content-center" size='sm'>
          {paginationItems}
        </Pagination>
      </Container>
    </div>
  );
};

export default ProductsContent;