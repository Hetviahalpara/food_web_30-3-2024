import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestimonialSlider from "../Pages/Slider/TestimonialSlider"
import ProductCart from "./Category.js/ProductCart";
import products from "../Fakedata/products";
import { useEffect } from "react";

function Home() {
    const [allProduct,SetAllProduct]=useState(products)    

    const[category,setCategory]=useState("all")
    useEffect(()=>{
        // console.log(category);
        if(category==="All"){
            SetAllProduct(products)
        }
        if(category==="Burger"){
            const filterProduct=products.filter(item=>item.category==="Burger")
            SetAllProduct(filterProduct)
        }
        if(category==="Pizza"){
            const filterProduct=products.filter(item=>item.category==="Pizza")
            SetAllProduct(filterProduct)
        }
        if(category==="Bread"){
            const filterProduct=products.filter(item=>item.category==="Bread")
            SetAllProduct(filterProduct)
        }
    },[category])

    return (
        <>
            <section className="container ">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="">
                            <p className="f-18">Easy way to make an order</p>
                            <h1 className="w-70">
                                <span className="red">HUNGRY?</span> Just wait food at <span className="red">your door</span>
                            </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, voluptatum</p>
                            <div>
                                <button className="home-btn-1">
                                    Order Now <i className="ri-arrow-right-s-line"></i>
                                </button>
                                <button className="home-btn-2 ms-3">See allfoods</button>
                            </div>
                            <div className="mt-5">
                                <span>
                                    <i className="ri-shield-keyhole-line "></i> 100% Secure Checkout
                                </span>
                                <span className="ms-4">
                                    <i className="ri-truck-line"></i> No shipping charge
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="assets/images/hero.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= 4 category start ===================== */}
            <section className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <div className="category-div">
                            <img src="assets/images/category-01.png" alt="" />
                            <span className="ms-3">Fastfood</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="category-div">
                            <img src="assets/images/category-02.png" alt="" />
                            <span className="ms-3">Pizza</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="category-div">
                            <img src="assets/images/category-03.png" alt="" />
                            <span className="ms-3">Asian Food</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="category-div">
                            <img src="assets/images/category-04.png" alt="" />
                            <span className="ms-3">Row Meat</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= 4 category end ===================== */}

            {/*======================= center section =======================*/}
            <section className="container">
                <div className="row">
                    <div className="text-center my-lg-5 py-lg-5">
                        <h5 className="red"> What we serve</h5>
                        <h2 className="w-25 mx-auto pt-2">
                            Just sit back at home we will <span className="red">take care</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo. </p>
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nemo. </p>
                    </div>
                </div>
            </section>
            {/*======================= center section =======================*/}
            {/*====================== select section start ==================*/}
            <section className="container ">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="fs-1 text-center">Populer Foods</h2>
                        <div className="mt-5">
                            <ul className="menu">
                                <li>
                                    <Link to="" onClick={()=>setCategory("All")}>All</Link>
                                </li>
                                <li>
                                    <Link to=""  onClick={()=>setCategory("Burger")}>
                                        <img src="assets/images/hamburger.png" className="me-2" alt="" width={18} height={18} />
                                        Burger
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" onClick={()=>setCategory("Pizza")}>
                                        <img src="assets/images/pizza.png" className="me-2" alt="" width={18} height={18} />
                                        Pizza
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" onClick={()=>setCategory("Bread")}>
                                        <img src="assets/images/bread.png" className="me-2" alt="" width={18} height={18} />
                                        Bread
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        {
                            allProduct.map((item)=>{
                                return (
                                    <div className="col-3" key={item.id}>
                                        <ProductCart ProductItem={item}></ProductCart>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            {/*====================== select section end ==================*/}

            {/*======================= 3 card start =====================*/}
            <section className="container my-lg-5 py-lg-4">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-lg-3">
                        <div className="card-3">
                            <img src="assets/images/service-01.png" className="mx-auto d-block " width={180} alt="" />
                            <p className="f-24 text-center">Quick Delivery</p>
                            <p className="text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-3">
                            <img src="assets/images/service-02.png" className="mx-auto d-block " width={180} alt="" />
                            <p className="f-24 text-center">Super Dine In</p>
                            <p className="text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-3">
                            <img src="assets/images/service-03.png" className="mx-auto d-block " width={180} alt="" />
                            <p className="f-24 text-center">Easy Pick Up</p>
                            <p className="text-center"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, veniam.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*======================= 3 card end =====================*/}

            {/*================== images text start ===================*/}
            <section className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="assets/images/location.png" className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6 align-items-center d-flex">
                        <div>
                            <div>
                                <h2>Why Tasty Treat?</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quam impedit eaque inventore, maiores labore quibusdam autem nam nesciunt. Eligendi modi eum debitis
                                    ad optio natus fuga ex sint explicabo.
                                </p>
                            </div>
                            <div className="mt-lg-5">
                                <span>
                                    <i className="ri-checkbox-circle-line red"></i> <span className="fw-bold">Fresh and tasty foods</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                                </span>
                                <span>
                                    <i className="ri-checkbox-circle-line red"></i> <span className="fw-bold">Quality support</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                                </span>
                                <span>
                                    <i className="ri-checkbox-circle-line red"></i> <span className="fw-bold">Order from any location</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, mollitia.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================== images text end ===================*/}

            {/*================== hot pizza start ================*/}
            <section className="container">
                <div className="row">
                    <h2 className="fs-1 text-center">Hot Pizza</h2>
                </div>
            </section>
            {/*================== hot pizza end ================*/}

            {/*================== text images carousel start ================*/}
            <section className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="red">Testimonial</h4>
                        <h2>
                            What our <span className="red">customers</span> are saying
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus guos sit perspiciatis inventore quis provident placeat fugiat !</p>
                        <div>
                            <TestimonialSlider></TestimonialSlider>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="assets/images/network.png" className="w-100" alt="" />
                    </div>
                </div>
            </section>
            {/*================== text images carousel end ================*/}


        </>
    );
}

export default Home;
