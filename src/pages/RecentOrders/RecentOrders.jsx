import React, { useEffect, useState } from "react";
import "./recentOrders.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentOrders } from "../../actions/recentOrders";

const RecentOrders = () => {
  const dispatch = useDispatch();
  const recentOrders = useSelector((state) => state?.recentOrdersReducer);
  const [userDatabaseId, setUserDatabaseId] = useState("");
  const [myRecentOrders, setMyRecentOrders] = useState([]);

  useEffect(() => {
    setUserDatabaseId(localStorage.getItem("Id"));

    dispatch(
      fetchRecentOrders({
        type: "FETCH_RECENT_ORDERS",
        userId: userDatabaseId,
      })
    );
    recentOrders.then((res) =>
      setMyRecentOrders(res?.RecentOrders?.data?.RecentOrders)
    );
  },[]);


  return (
    <div id="RecentOrders">
      {myRecentOrders!=null ? myRecentOrders.map((item, index) => {
        return (
          <div key={item?._id}>
            <div id="Product">
              <div className="ProductInfo">
                <p>{item?.recentOrders?.[0]?.data?.ProductName}</p>
              </div>
              <div className="ProductInfo">
                <p>₹{item?.recentOrders?.[0]?.data?.ProductPrice}</p>
              </div>
              <div className="rating">
                {Array(item?.recentOrders?.[0]?.data?.ProductRating)
                  .fill("⭐")
                  .map((item, index) => (
                    <div key={index} className="ProductInfo ">
                      {item}
                    </div>
                  ))}
              </div>
              <img
                className="ProductImg"
                src={item?.recentOrders?.[0]?.data?.ProductImage}
                alt={item?.recentOrders?.[0]?.data?.ProductName}
              ></img>
              <p>Product Id : {item?._id}</p>
            </div>
          </div>
        );
      }):<></>}
    </div>
  );
};

export default RecentOrders;
