import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Containers/Landing/Landing";
import Cart from "./Containers/Cart/Cart.jsx";
import IndividualCard from "./Components/IndividualCard/IndividualCard";
// import { addToCards, generateCard } from "./Services/import.js";

function App() {
  // console.log(generateCard());
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cards/:id" element={<IndividualCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
