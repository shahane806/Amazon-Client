import React from "react";
import "./userInfo.css";
const UserInfo = ({ user }) => {
  console.log(user)
  return (
    <div id="ProfileInfo">
      {user?.name ? (
        <>
          <div className="subtotal">
            <h1>Profile Info</h1>
          </div>
          <div className="subtotal">
            <b>Name :</b> <p>{user?.name}</p>
          </div>
          <div className="subtotal">
            <b>Mobile :</b> <p>{user?.mobile}</p>
          </div>

          <div className="subtotal">
            <b>Gender :</b> <p>{user?.gender}</p>
          </div>
          <div className="subtotal">
            <b>Email :</b> <p>{user?.email}</p>
          </div>

          <div className="subtotal">
            <b>Address1 :</b> <p>{user?.addressLine1}</p>
          </div>
          <div className="subtotal">
            <b>Address2 :</b> <p>{user?.addressLine2}</p>
          </div>
          <div className="subtotal">
            <b>State :</b> <p>{user?.state}</p>
          </div>
          <div className="subtotal">
            <b>District :</b> <p>{user?.district}</p>
          </div>
          <div className="subtotal">
            <b>Country :</b> <p>{user?.country}</p>
          </div>
        </>
      ) : (
        <p>Set userinfo from your profile.</p>
      )}
    </div>
  );
};

export default UserInfo;
