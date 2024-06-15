import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Router from "../Routes/Router"
import Carts from "../Pages/cart/Carts"
import {useSelector} from "react-redux"

function Layout() {

  const Cart =useSelector(state=>state.cartUi.cartVisible)
  return (
<>
    {
      Cart===true ? <Carts></Carts>:null
    }
  <Header></Header>
  <div>
    <Router></Router>
  </div>
  <Footer></Footer>
</>
  )
}

export default Layout