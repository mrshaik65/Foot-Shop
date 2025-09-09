import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
import Products from "./Components/Products/products";
import Cart from "./Components/Cart/cart";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />


        <Routes>
          <Route path="/" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
    </>
  );
}
export default App;
