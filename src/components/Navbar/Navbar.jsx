import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AmazonLogo from "../../assets/logos/amazonlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const auth = useSelector((state) => state?.authReducer);
  const cart = useSelector((state) => state?.cartReducer);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {
    auth.then((res) => setEmail(res?.result?.userId));
    auth.then((res) => setToken(res?.token));
  }, [auth]);
  useEffect(() => {
    if (token) {
      const decodeToken = decode(token);
      if (new Date().getTime() > decodeToken?.exp * 1000) {
        handleLogout();
      }
    }
    if (localStorage.getItem("Profile")) {
      const newdata = JSON.parse(localStorage.getItem("Profile"));
      dispatch({ type: "AUTH", newdata });
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch({ type: "AUTH", data: null });
    dispatch({ type: "PURCHASE_ITEM", data: null });
    dispatch({ type: "SET_PROFILE", data: null });
    dispatch({ type: "SUBTOTAL", data: null });
    localStorage.clear();
  };
  return (
    <div id="Navbar-Main">
      <div className="Navbar-Logo">
        <Link className="Navbar-Logo" to="/">
          <img src={AmazonLogo} alt="AmazonLogo"></img>
        </Link>
      </div>
      <div className="Navbar-SearchBar">
        <input type="text" placeholder="Search Item..." />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="Navbar-Links">
        {!email && (
          <Link to="/Auth" className="Navbar-Link-Type-One">
            <p>Hello User</p>
            <h3>SignIn</h3>
          </Link>
        )}
        {email && (
          <Link to="/Auth" className="Navbar-Link-Type-One">
            <p>Hello {email}</p>
            <h3 onClick={handleLogout}>Logout</h3>
          </Link>
        )}
        {email && (
          <Link to="/Orders" className="Navbar-Link-Type-One">
            <p>Returns</p>
            <h3>&Orders</h3>
          </Link>
        )}
        {email && (
          <Link to="/Profile" className="Navbar-Link-Type-One">
            <p>Your</p>
            <h3>Profile</h3>
          </Link>
        )}
        <Link to="/Cart" className="Navbar-Link-Type-Two">
          <ShoppingBasketIcon />
          <p>{cart.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
