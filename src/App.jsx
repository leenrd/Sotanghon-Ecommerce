import "../styles/utilities.css";
import Homepage from "../src/pages/Homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Items from "./pages/Items/items";
import About from "./pages/About/about";
import Location from "./pages/Location/Location";
import Footer from "./components/Footer/footer";
import { ShopContextProvider } from "./context/ShopContext";
export const CartContext = createContext();

function App() {
  const [cartOn, setCartOn] = useState(false);
  const handleCart = () => {
    setCartOn((prevOn) => !prevOn);
  };

  return (
    <>
      <Router>
        <ShopContextProvider>
          <CartContext.Provider value={{ cartOn, setCartOn, handleCart }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/items" element={<Items />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />
              {/* <Route path='*' element={<PageNotFound />}/> */}
            </Routes>
            <Footer />
          </CartContext.Provider>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
