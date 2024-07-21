import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Cabinet from "./components/Cabinet";
import CreateProduct from "./components/CreateProduct";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Search from "./components/Search";
import ProductCart from "./components/ProductCart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/productCart" element={<ProductCart/>}/>
      </Routes>
    </>
  );
};

export default App;
