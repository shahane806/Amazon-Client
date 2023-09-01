import React, { useEffect, useState } from "react";
import paymentSuccess from "../../assets/logos/paymentSuccess.gif";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { updateRecentOrders } from "../../actions/recentOrders";
const handleDownloadReceipt = () => {};

const PaymentSuccess = () => {
  useEffect(() => {
    window.location.href = "/paymentSuccessful/#";
  }, []);
  const [userId, setUserId] = useState("");
  const [newOrders, setNewOrders] = useState("");
  const [userDatabaseId, setUserDatabaseId] = useState("");
  const [profile, setprofile] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.authReducer);

  useEffect(() => {
    auth.then((res) => setUserId(res?.result?.userId));
    auth.then((res) => setUserDatabaseId(res?.result?._id));
    auth.then((res) => setprofile(res?.result?.profile));
    console.log(profile, userId, userDatabaseId, newOrders);
    setNewOrders(
      JSON.parse(localStorage.getItem("PurchaseItems"))?.payload?.data?.cart
    );

    if(userId!=null){
      dispatch(
        updateRecentOrders({ userId: userDatabaseId, newOrders })
      );
    }
  }, [userId]);
  
  return (
    <div id="PaymentSuccessful" className="paymentSuccessful">
      <img src={paymentSuccess} alt="paymentSuccessful" />
      <h1>Payment Successful</h1>

      <div className="paymentSuccessfulBtns">
        <Link to="/">
          <button className="LoginInputsSubmit LoginInputs paymentSuccessfulBtn">
            Go To Dashboard
          </button>
        </Link>

        <button
          onClick={handleDownloadReceipt}
          className="DownloadIcon paymentSuccessfulBtn LoginInputsSubmit LoginInputs"
        >
          <span style={{ marginRight: "10px" }}>Download Recipt</span>
          <DownloadIcon />
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
