import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {cartAction} from "../../Store/Slice/CartSlice"


function ProductCart(props) {
    const { id, title, price, image01 } = props.ProductItem;
    const dispatch = useDispatch()

    const addToCart=()=>{
        // alert("griugggu")
        dispatch(cartAction.addItem({ id, title, image01, price }));
    }
    
    // console.log(props);

    return (
        <>
            <div>
                <div className="card mb-3">
                    <Link to={`/foods/${id}`}>
                        <img src={image01} className="card-img-top p-3 d-block mx-auto" style={{ height: 130, width: 130 }} alt="..." />
                    </Link>
                    <div className="card-body">
                        <Link to={`/foods/${id}`} className="text-dark h6 text-center d-block pb-3">
                            {title}
                        </Link>
                        <div className="d-flex justify-content-between">
                            <span>${price}</span>
                            <Link to="#" className="btn btn-cart bg-red text-white" onClick={addToCart}>
                                Add to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCart;
