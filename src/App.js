import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={'Home'} />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer greeting={'Libros por categoria'} />} />
          <Route exact path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Libros por categoria'} />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
