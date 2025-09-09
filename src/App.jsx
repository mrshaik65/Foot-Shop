import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home"
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
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
