import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Profile from "./pages/Profile/Profile";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";
import PaymentFailed from './pages/Payment/PaymentFailed';
import RecentOrders from "./pages/RecentOrders/RecentOrders";
const AllRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <ErrorPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/auth"
            element={
              <>
                <Navbar />
                <Auth />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/Checkout/Payment"
            element={
              <>
                <Navbar />
                <Payment />
              </>
            }
          />
          <Route
            path="/Profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
          <Route
            path="/paymentSuccessful"
            element={
              <>
                <Navbar />
                <PaymentSuccess />
              </>
            }
          />
          <Route
            path="/paymentFailed"
            element={
              <>
                <Navbar />
                <PaymentFailed />
              </>
            }
          />
          <Route
            path="/Orders"
            element={
              <>
                <Navbar />
                <RecentOrders/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoutes;
