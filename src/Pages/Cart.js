import React from "react";
import Helmet from "../Components/Helmet";
import Commonsection from "../Components/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/Slice/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const CartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount=useSelector((state)=>state.cart.totalAmount)

  const Tr = (props) => {
    console.log(props.items);
    const { image01, title, totalprice, quantity, id } = props.items;
    return (
      <tr>
        <td className="text-center ">
          <img src={image01} width={50} height={50} alt=""></img>
        </td>
        <td className="align-middle text-center">{title}</td>
        <td className="align-middle text-center">$ {totalprice}</td>
        <td className="align-middle text-center">{quantity}</td>
        <td
          className="align-middle text-center"
          onClick={() => props.delete(id)}
        >
          {/* onClick={props.delete} uper id assign nai karvani tay aa onclick chalshe */}
          <i className="ri-delete-bin-6-line"></i>
        </td>
      </tr>
    );
  };

  const dispatch = useDispatch();
  const deleteItem = (id) => {
    // alert('fdkhjfk')
    dispatch(cartAction.deleteItem({ id }));
  };

  return (
    <>
      <Helmet title="Cart">
        <Commonsection title="cart"></Commonsection>
        {CartItems.length === 0 ? (
          <div className="my-4">
            <h3 className="text-center my-5">Your cart is empty..</h3>
          </div>
        ) : (
          <section className="container my-5">
            <div className="row">
              <div className="col-12">
                <table className="table mb-0 table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Image</th>
                      <th className="text-center">Product Title</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartItems.map((item) => {
                      return (
                        <Tr
                          items={item}
                          delete={() => deleteItem(item.id)}
                        ></Tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
        <div className="container my-5">
          <h5 className="fw-bold">Subtotal : ${totalAmount}</h5>
          <p>Taxes and shipping will calculate at checkout</p>
          <Link className="btn btn-danger me-4" to="/allfood">
            Continue Shopping
          </Link>
          <Link className="btn btn-danger" to="/checkout">
            Proceed to checkout
          </Link>
        </div>
      </Helmet>
    </>
  );
}

export default Cart;
