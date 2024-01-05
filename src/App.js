import "./App.css";
import Contact from "./pages/contact";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { ShopContextProvider } from "./context/shop-context";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/cart/cart";
import { Shop } from "./pages/shop/shop";

// import { Login } from "./pages/login/login";

// import { Signup } from "./pages/signup/signup";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
