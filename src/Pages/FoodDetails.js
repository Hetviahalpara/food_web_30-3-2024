import React, { useEffect, useState } from "react";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/CommonSection";
import { Link, useParams } from "react-router-dom";
import products from "../Fakedata/products";
import { useDispatch } from "react-redux";
import {cartAction} from "../Store/Slice/CartSlice"


function FoodDetails() {
  const { id } = useParams();
  console.log(id);

  const Product = products.find((item) => item.id === id);
  console.log(Product);

  const { title, price, image01, image02, image03, category, desc } = Product;

  const [preImage, setPreImage] = useState(image01);

  const [tab, setTab] = useState('desc');

  const dispatch = useDispatch()
  const addToCart=()=>{
    // alert('fjhj')
    dispatch(cartAction.addItem({ id, title, image01, price }));
  }

  useEffect(()=>{
    setPreImage(Product.image01)
    window.scrollTo(0,0)
  },[Product])

  return (
    <>
      <Helmet title="FoodDetails">
      <CommonSection title={title}></CommonSection>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-lg-1">
            <div className="food-box1">
              <div>
                <img
                  alt=""
                  src={image01}
                  onClick={() => {
                    setPreImage(image01);
                  }}
                ></img>
              </div>
              <div>
                <img
                  alt=""
                  src={image02}
                  onClick={() => {
                    setPreImage(image02);
                  }}
                ></img>
              </div>
              <div>
                <img
                  alt=""
                  src={image03}
                  onClick={() => {
                    setPreImage(image03);
                  }}
                ></img>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="food-box2">
              <div>
                <img src={preImage} alt=""></img>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="food-box3">
              {/* <h3></h3> */}
              <p className="food-p-price">
                Price: <span>${price}</span>
              </p>
              <p className="food-p-cate">
                Category: <span>{category}</span>
              </p>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="d-flex align-items-center gap-5 mb-4">
          <Link className="food-btn" onClick={()=>{setTab('desc')}}>Description</Link>
          <Link className="food-btn" onClick={()=>{setTab('review')}}>Review</Link>
        </div>

        {tab === 'desc' ? (
          <div id="desc">
            <p>{desc}</p>
          </div>
        ) : (
          <div id="rev">
            <div className="food-item">
              <h5>hetvi</h5>
              <span>hetvi@gmail.com</span>
              <p>Great Product</p>
            </div>
            <div className="food-item">
              <h5>hetvi</h5>
              <span>hetvi@gmail.com</span>
              <p>Great Product</p>
            </div>
            <div className="food-item">
              <h5>hetvi</h5>
              <span>hetvi@gmail.com</span>
              <p>Great Product</p>
            </div>

            <form>
              <div className="form-rev-box">
                <div>
                  <input type="text" placeholder="Enter Your Name"></input>
                </div>
                <div>
                  <input type="text" placeholder="Enter Your Name"></input>
                </div>
                <div>
                  <textarea placeholder="Enter Something"></textarea>
                </div>
                <div>
                  <input type="button" value="Submit"></input>
                </div>
              </div>
            </form>
          </div>
        )}

        
      </div>
      <div>
        <h2 className="text-center">Related Product</h2> 

      </div>
    </Helmet>
    </>
  );
}

export default FoodDetails;
