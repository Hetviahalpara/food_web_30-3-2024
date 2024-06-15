import React from "react";
import Commonsection from "../Components/CommonSection";

function CheckOut() {
  // const [fromData,setFromData] =useState({
  //   name:'',
  //   email:'',
  //   number:'',
  //   Country:'',
  //   City:'',
  //   PostalCode:'',
  //   fromDataShow:false
  // })

  // const fromDataSubmitHandler=(e)=>{
  //   e.preventDefault();
  //   alert('dfjds')

  //   setFromData({
  //     name:e.target.name.value,
  //     email:e.target.email.value,
  //     number:e.target.number.value,
  //     Country:e.target.Country.value,
  //     City:e.target.City.value,
  //     PostalCode:e.target.PostalCode.value,
  //   })
  //   console.log('fromsubmitdata' + fromData)
  // }

  return (
    <>
      <Commonsection title="Checkout"></Commonsection>

      <section className="container my-5">
        <div className="row">
          <div className="col-12">
            <form className="w-50">
              <h3>Shipping Address</h3>
              <div className="my-4">
                <input
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="my-4">
                <input
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="form-control"
                ></input>
              </div>
              <div className="my-4">
                <input
                  name="number"
                  placeholder="Phone number"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="my-4">
                <input
                  name="Country"
                  placeholder="Country"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="my-4">
                <input
                  name="City"
                  placeholder="City"
                  type="text"
                  className="form-control "
                ></input>
              </div>
              <div className="my-4">
                <input
                  name="PostalCode"
                  placeholder="Postal code"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <button type="submit" className="btn btn-danger">
                Payment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
