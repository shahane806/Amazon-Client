import React, { useEffect } from "react";
import "./Checkout.css";
import purchase from "../../actions/purchase";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Checkout = ({ subtotal, totalPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state?.cartReducer);
  const auth = useSelector((state) => state?.authReducer);

  const subtotal2 = useSelector((state) => state?.subtotalReducer);
  const [profile, setProfile] = useState("");
  const [message, setMessage] = useState("");
  const [_id,setId] = useState("");

  useEffect(() => {
    auth.then((res) => setProfile(res?.result?.profile));
    console.log(auth)
    auth.then((res) => setId(res?.result?._id));
  }, [auth]);
  const handlePaymentDispatch = (e) => {
    e.preventDefault();
    if (subtotal != 0) {
      dispatch(purchase({_id, profile, cart, subtotal2 }));
      navigate("/checkout/payment");
    } else {
      setMessage("No Product");
    }
  };
  return (
    <div id="Checkout">
      <div className="subtotal">
        <b>Subtotals {subtotal} items</b>
      </div>
      <div className="subtotal">
        <b>Total Amount : ₹{totalPrice}</b>
      </div>
      <div className="subtotal">
        <b>{message}</b>
      </div>

      <button
        className="AddToCartButton subtotal"
        onClick={handlePaymentDispatch}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
