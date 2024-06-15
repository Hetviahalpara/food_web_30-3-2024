import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import FoodDetails from "../Pages/FoodDetails"
import Contact from "../Pages/Contact"
import Cart from "../Pages/Cart"
import AllFood from "../Pages/AllFood"
import CheckOut from "../Pages/CheckOut";

function Router() {
    return (
        <>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route> 
              <Route path="/foods/:id" element={<FoodDetails></FoodDetails>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/allfood" element={<AllFood></AllFood>}></Route>
              <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
            </Routes>
        </>
    );
}

export default Router;
