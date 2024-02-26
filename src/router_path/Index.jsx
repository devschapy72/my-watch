import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Details from "../page_details/Details";
import Products from "../components/Products";
import Cart from "../components/Cart";
import TrastedDetails from "../trasted_brand/TrastedDetails";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/trasteddetails/:id" element={<TrastedDetails />} />
    </Routes>
  );
};

export default Index;
