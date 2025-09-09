import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/products";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />


        <Routes>
          <Route path="/" element={<Home />} />
                    <Route path="/Products" element={<Products />} />

        </Routes>
    </>
  );
}
export default App;
