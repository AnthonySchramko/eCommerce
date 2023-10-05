import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Containers/Landing/Landing";
import Products from "./Containers/Products/Products";
import Cart from "./Containers/Cart/Cart.jsx";
import ProductWrapper from "./Components/ProductWrapper/ProductWrapper";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Landing />
                {/* <Products /> */}
                <ProductWrapper />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
