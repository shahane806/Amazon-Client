import React, { useEffect } from "react";
import paymentFailed from "../../assets/logos/paymentFailed.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
const PaymentFailed = () => {
    const navigate = useNavigate();
    const handlePaymentFailedTryAgain = () => {navigate("/Checkout/Payment")};
  useEffect(() => {
    window.location.href = "/paymentFailed/#";
  }, []);
  return (
    <div id="PaymentSuccessful" className="paymentSuccessful">
      <img src={paymentFailed} alt="paymentFailed" />
      <h1>Payment Failed</h1>

      <div className="paymentSuccessfulBtns">
        <Link to="/">
          <button className="LoginInputsSubmit LoginInputs paymentSuccessfulBtn">
            Go To Dashboard
          </button>
        </Link>

        <button
          onClick={handlePaymentFailedTryAgain}
          className="DownloadIcon paymentSuccessfulBtn LoginInputsSubmit LoginInputs"
        >
          <span style={{ marginRight: "10px" }}>Try Again</span>
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentFailed;
