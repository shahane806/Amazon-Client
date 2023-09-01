import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile") !== {}) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile"))?.token
    }`;
    return req;
  }
});
export const Login = (authdata) => API.post("/auth/login", authdata);
export const SignUp = (authdata) => API.post("/auth/signup", authdata);
export const ForgetPassword = (authdata) =>
  API.post("/auth/forgetPassword", authdata);
export const PurchaseItems = (items) => API.post("/checkout/payment", items);
export const SetProfile = (profile) => API.post("/user/profile", profile);

export const GetUpdatedProfile = (data) =>
  API.post("/user/getUpdatedProfile", data);
export const FetchRecentOrders = (data) =>
  API.post("/Orders/FetchRecentOrders", data);
export const UpdateRecentOrders = (data) =>
  API.post("/Orders/UpdateRecentOrders", data);
