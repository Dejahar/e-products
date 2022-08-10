import App from "../components/App/App";
import ProductsContent from "../components/Products/ProductsContent";
import Shops from "../components/Shops/Shops";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Login from "../components/Login/LoginPage";
import Checkout from "../components/Checkout/Checkout"
import { Route, Routes } from "react-router-dom";

export const ProductsPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ProductsContent />} />
          <Route path="products" element={<ProductsContent />} />
          <Route path="shops" element={<Shops />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              {" "}
              <p>404 Page was not found!</p>{" "}
            </main>
          }
        />
      </Routes>
    </>
  );
};