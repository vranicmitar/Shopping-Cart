import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import { OnSale } from "./pages/OnSale/OnSale";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/sale" element={<OnSale />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
