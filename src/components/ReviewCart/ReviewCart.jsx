import React from "react";
import "./ReviewCart.css";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";

const ReviewCart = ({subtotal,totalPrice,cart}) => {
  const user = useSelector((state) => state?.authReducer);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    user.then((res) => setProfile(res?.result?.profile));
  }, [user]);
  return (
    <div id="ReviewCart">
      <div id="Checkout">
        <h1>Payment</h1>

        <div className="subtotal">
          <b>Subtotals {subtotal} items</b>
        </div>
        <div className="subtotal">
          <b>Total Amount : ₹{totalPrice}</b>
        </div>
      </div>
      <div id="Checkout">
        <h1>Shipping Address</h1>

        <div className=" ProductInfo shoppingHeading">
        { profile&& <div id="shoppingHeading">
      {profile?.name ? (
        <>
          <div className="subtotal">
          </div>
          <div className="subtotal">
            <b>Name :</b> <p>{profile?.name}</p>
          </div>
          <div className="subtotal">
            <b>Mobile :</b> <p>{profile?.mobile}</p>
          </div>

          <div className="subtotal">
            <b>Gender :</b> <p>{profile?.gender}</p>
          </div>
          <div className="subtotal">
            <b>Email :</b> <p>{profile?.email}</p>
          </div>

          <div className="subtotal">
            <b>Address1 :</b> <p>{profile?.addressLine1}</p>
          </div>
          <div className="subtotal">
            <b>Address2 :</b> <p>{profile?.addressLine2}</p>
          </div>
          <div className="subtotal">
            <b>State :</b> <p>{profile?.state}</p>
          </div>
          <div className="subtotal">
            <b>District :</b> <p>{profile?.district}</p>
          </div>
          <div className="subtotal">
            <b>Country :</b> <p>{profile?.country}</p>
          </div>
        </>
      ) : (
        <p>Set userinfo from your profile.</p>
      )}
    </div>}
        </div>
        
      </div>
      <div id="Checkout">
      <h1>Products</h1>
      <div className="ProductInfo shoppingHeading" id="CartProduct">
        {cart.map((item, index) => {
          return (
            <div key={index + item?.data?.ProductName}  className="cartproduct paymentCartProduct">
              <div className="cartProductInfo" style={{wordWrap:"break-word" , width:"100%",lineHeight:"2"}}>{item?.data?.ProductName}</div>
              <div className="cartProductInfo"><b>₹{item?.data?.ProductPrice}</b></div>
              <div className="cartrating rating">
                {Array(item?.data?.ProductRating)
                  .fill("⭐")
                  .map((item, index) => (
                    <div key={index} className="cartProductInfo " style={{wordWrap:"break-word" , width:"100%"}}>
                      {item}
                    </div>
                  ))}
              </div>
              <img
                className="cartProductImg"
                src={item?.data?.ProductImage}
                alt={item?.data?.ProductName}
              ></img>
              
            </div>
          );
        })}
        </div>
    </div>
    </div>
  );
};

export default ReviewCart;
