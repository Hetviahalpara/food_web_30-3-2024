import React from "react"
import { useDispatch } from "react-redux";
import {cartAction} from "../../Store/Slice/CartSlice"



function CartItem(props){
    const {id,price,title,image01,totalprice,quantity}=props.item

    const dispatch = useDispatch()

    const addToCart=()=>{
        // alert("griugggu")
        dispatch(cartAction.addItem({ id, title, image01, price }));
    }

    const removeItem=()=>{
        // alert( id + " grjhrtr")
        if(quantity===1){
            return
        }
        else{
            dispatch(cartAction.removeItem({id, title, image01, price}))
        }
    }

    const deleteItem=()=>{
        // alert("dhjfgjhg")
        dispatch(cartAction.deleteItem({id}))
    }
    

    return(
        <>
            <div className="list-group-item border-0 cart__item">
                <div className="cart__item-info d-flex gap-2">
                    <img src={image01} alt="yft"></img>
                    <div className="cart__product-info w-100 d-flex align-items-center justify-content-between gap-4">
                        <div>
                            <h6 className="cart__product-title">{title}</h6>
                            <p className="d-flex align-items-center gap-5 cart__product-price">{quantity} X <span>${totalprice}</span></p>
                            <div className="d-flex align-items-center w-100px justify-content-between increase__decrease-btn ">
                                <span className="increase__btn" onClick={addToCart}><i className="ri-add-line"></i></span>
                                <span className="quantity">{quantity}</span>
                                <span className="decrease__btn" onClick={removeItem}><i className="ri-subtract-line"></i></span>
                            </div>
                        </div>
                        <span className="delete__btn" onClick={deleteItem}><i className="ri-close-circle-fill"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;