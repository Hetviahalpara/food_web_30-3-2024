import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartUiAction } from "../Store/Slice/CartSliceUi";

function Header() {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const dispatch = useDispatch()
    const cartToggle = () => {
        dispatch(cartUiAction.toggle())
    }

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="assets/images/res-logo.png" alt="" width={55} height={55} />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 g-2">
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/allfood">
                                        Foods
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  fw-bold" to="/cart">
                                        Cart
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="mx-2 position-relative" onClick={cartToggle}>
                                <i className="ri-shopping-bag-line fs-5"></i>
                                <span className="position-absolute cartValue px-1 py-0 bg-red text-white rounded-circle">
                                    <span className="text-white">{totalQuantity}</span>
                                </span>
                            </span>
                            <i className="ri-user-line fs-5 ms-3"></i>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
