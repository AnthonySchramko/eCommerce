import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import IndividualCard from "./Pages/IndividualCard/IndividualCard";
import { generateCard } from "./Services/import.js";
function App() {
  console.log(generateCard());
  return (
    <BrowserRouter>
      <Navbar />
      <div className=".body">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cards/:id" element={<IndividualCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
