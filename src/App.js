import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Notification, NotificationProvider} from "./notification/NotificationService";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route
                  path="/"
                  element={<ItemListContainer greeting={"Home"} />}
                />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer greeting={"Books by category"} />}
                />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path='/login' element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
};

export default App;
