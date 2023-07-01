import { AppProvider } from "./AppContext";
import "./App.css";
import Home from "./Compenets3/home/Home"
import Product from "./Compenets3/product/Product";
import Cart from "./Compenets3/cart/Cart";
import Product2 from "./Compenets3/product2/Product2";
import Movie from "./Compenets3/header/Movie";
import Size from "./Compenets3/size/Size";
import Detail from "./Compenets3/detail/Detail"
import Detail2 from "./Compenets3/detail/Detail2"
import { Routes, Route, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormFloatingBasicExample from "./Compenets3/signin/singnin";
import FormFloatingLayoutExample from "./Compenets3/signup/signup";
import Oder from "./Compenets3/oder/Oder";
import Oder2 from "./Compenets3/oder/Oder2";
import OderCart from "./Compenets3/oder/OderCart";
import ScrollToTopRoute from './Compenets3/header/Scroll';
import React, { Component } from 'react';
import { Router } from "react-router-dom/dist";
import ScrollToTop from "react-scroll-to-top";
import { render } from "@testing-library/react";
function reload(){
  
}
const App =()=> {
  // window.location.reload(true)
  return (
 
    <div className="App">
      <AppProvider>
        <Movie />
        <Routes>
          <Route index element={<Home />} ></Route>
          <Route  path="/SanPham"  element={<Product />}></Route>
          <Route path="/SanPham/Giay/:id" element={<Detail />}></Route>
          <Route path="/SanPham/PhuKien/:id" element={<Detail2 />}></Route>
          <Route path="/PhuKien" element={<Product2 />}></Route>
          <Route path="/GioHang" element={<Cart />}></Route>
          <Route path="/Huong-Dan-Chon-Size" element={<Size />}></Route>
          <Route path="/Signin" element={<FormFloatingBasicExample/>}></Route>
          <Route path="/Signup" element={<FormFloatingLayoutExample/>}></Route>
          <Route path="/DatHang/Giay/:id" element={<Oder />}></Route>
          <Route path="/DatHang/PhuKien/:id" element={<Oder2 />}></Route>
          <Route path="/DatHang/ThanhToan" element={<OderCart />}></Route>
        </Routes>
        <ScrollToTop/>
      </AppProvider>



    </div>
   
    )
  
   
}
export default App;