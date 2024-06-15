import React from "react"
import { useSelector, useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import { cartUiAction } from "../../Store/Slice/CartSliceUi"

function Carts() {

    const dispatch = useDispatch()
    const cartToggle = () => {
       dispatch(cartUiAction.toggle())
   }
//    const {totalQuantity}=props.item


    const CartItems = useSelector(state => state.cart.cartItems)
    console.log('CartItems ' + CartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount)
    console.log('total items ' + totalAmount);

    return (
        <>
            <div className="cart__container">
                <div className="cart list-group">
                    <div className="cart__close" onClick={cartToggle}>
                        <span><i class="ri-close-circle-fill"></i></span>
                    </div>
                    <div className="cart__item-list">
                        {
                            CartItems.length===0?(<h3 className='text-center my-5'>Your cart is empty..</h3>):(
                                CartItems.map((items) => {
                                    return <CartItem item={items}></CartItem>
                                })
                            )
                        }
                    </div>
                    <div className="cart__bottom d-flex align-item-center justify-content-between">
                        <h6>Subtotal amount : <span>${totalAmount}</span></h6>
                        <button><Link to="/checkout">Checkout</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carts