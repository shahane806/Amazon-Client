import React, { useEffect, useState } from "react";
import "../../components/Products/Product.css";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../../components/Checkout/Checkout";
import UserInfo from "../../components/UserInfo/UserInfo";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cartReducer);
  const auth = useSelector((state) => state?.authReducer);

  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    auth.then((res) => setEmail(res?.result?.userId));
    auth.then((res) => setProfile(res?.result?.profile));
  }, [auth]);
  const [newCart, setNewCart] = useState([]);
  const [totalPrice, setTotal] = useState(0);
  const [sub, setSub] = useState(0);
  useEffect(() => {
    setNewCart(cart);
    setTotal(
      newCart.reduce(
        (amount, item) => amount + item?.data?.ProductPrice,

        0
      )
    );
    setSub(cart.length);
    dispatch({ type: "SUBTOTAL", data: { sub, totalPrice } });
  }, [newCart, cart, totalPrice, dispatch, sub]);
  const handleRemoveFromCart = (e, index) => {
    e.preventDefault();
    newCart.splice(index, 1);

    dispatch({ type: "REMOVE_FROM_CART", data: newCart });
  };
  return (
    <>
      <div className="ProductInfo shoppingHeading">
        <h1>YOUR SHOPPING CART</h1>
        <Checkout totalPrice={totalPrice} subtotal={cart.length} />
        {profile && <UserInfo user={profile} />}
      </div>
      <div className="ProductInfo shoppingHeading " id="CartProduct">
        {newCart.map((item, index) => {
          return (
            <div key={index + item?.data?.ProductName} className="cartproduct">
              <div
                className="cartProductInfo "
                style={{ wordWrap: "break-word", width: "100%" }}
              >
                {item?.data?.ProductName}
              </div>
              <div className="cartProductInfo">
                <b>₹{item?.data?.ProductPrice}</b>
              </div>
              <div className="cartrating rating">
                {Array(item?.data?.ProductRating)
                  .fill("⭐")
                  .map((item, index) => (
                    <div
                      style={{ wordWrap: "break-word", width: "100%" }}
                      key={index}
                      className="cartProductInfo "
                    >
                      {item}
                    </div>
                  ))}
              </div>
              <img
                className="cartProductImg"
                src={item?.data?.ProductImage}
                alt={item?.data?.ProductName}
              ></img>
              <button
                className="AddToCartButton"
                onClick={(e) => handleRemoveFromCart(e, index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
