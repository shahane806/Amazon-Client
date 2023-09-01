import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ReviewCart from "../../components/ReviewCart/ReviewCart";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
const Payment = () => {
  const cart = useSelector((state) => state?.cartReducer);
  const subtotal = useSelector((state) => state?.subtotalReducer);
  const auth = useSelector((state) => state?.authReducer);
  const cl = useSelector((state) => state?.purchaseItemsReducer);
  const [profile, setProfile] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const  [stripePromise, setStripePromise] = useState(null);
  useEffect(() => {
    auth.then((res) => setProfile(res?.result?.profile));
    
    if(subtotal?.data?.totalPrice>0){
     setStripePromise(loadStripe(
       "pk_test_51MhATBSDpu6MsaKXK8RVo8sWkPNIefeLTMKaLN62ZbDRsEyNic9fEKEDQ4k11jlSVxw5Z7h0WYbl6rrU4kky2rT700bCBWmzeW"
     ));
     
    }
 
    cl.then((res) => setClientSecret(res?.payload?.clientSecret));
     
  
  }, [cart, subtotal,cl]);
  
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div id="Payment">
      {subtotal?.data?.totalPrice===0 ? (
        <p>No Products.</p>
      ) : (
        <>
          <div className="ProductReview">
          <ReviewCart subtotal={subtotal?.data?.sub} totalPrice={subtotal?.data?.totalPrice} cart={cart}/>
         
          </div>
          <div className="CheckoutForm">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                
                <CheckoutForm clientSecret={clientSecret} />
              </Elements>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
