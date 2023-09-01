import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Profile.css";
import {profile } from "../../actions/profile";
const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.authReducer);
  const newProfile = useSelector((state) => state?.profileReducer);
  const [newAuth, setAuth] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [newUser, setUser] = useState("");
  const user = {
    name: name,
    gender: gender,
    email: email,
    city: city,
    pinCode: pinCode,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    mobile: mobile,
    state: state,
    district: district,
    country: country,
  };
  useEffect(() => {
    auth.then((res) => {
      setAuth(res);
    });

    newProfile.then((res) => setUser(res?.profile?.user));
    if (newUser || localStorage.getItem("Profile")) {
      const prof = JSON.parse(localStorage.getItem("Profile"))?.result?.profile;
      console.log(prof)
      setAddressLine1(newUser?.addressLine1||prof?.addressone);
      setName(newUser?.name||prof?.name);
      setGender(newUser?.gender||prof?.gender);
      setCity(newUser?.city||prof?.city);
      setPinCode(newUser?.pinCode||prof?.pinCode);
      setAddressLine2(newUser?.addresstwo||prof?.adresstwo);
      setMobile(newUser?.mobile||prof?.mobile);
      setState(newUser?.state||prof?.state);
      setDistrict(newUser?.district||prof?.district);
      setCountry(newUser?.country||prof?.country);
      setEmail(newUser?.email||prof?.email);
    }
  }, [newAuth]);
  const handleSetUserInfo = (e) => {
    e.preventDefault();
    dispatch(profile({ type: "SET_PROFILE", profile: { user, newAuth } }));
  };
  return (
    <div id="Profile">
      <form onSubmit={handleSetUserInfo}>
        <h1>Shipping Address</h1>
        <input
          type="text"
          className="LoginInputs profileInputs"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="radioGender  LoginInputs">
          <label className=" radioInput">Gender:</label>
          <input
            type="radio"
            className="LoginInputs radioInput"
            name="gender"
            checked={gender === "Male"}
            onClick={(e) => setGender("Male")}
            value={gender}
          />
          <label className=" radioInput">Male</label>
          <input
            type="radio"
            className="LoginInputs radioInput"
            name="gender"
            checked={gender === "Female"}
            onClick={(e) => setGender("Female")}
            value={gender}
          />
          <label className=" radioInput">Female</label>
          <input
            type="radio"
            className="LoginInputs radioInput"
            name="gender"
            checked={gender === "Other"}
            onClick={(e) => setGender("Other")}
            value={gender}
          />
          <label className=" radioInput">Other</label>
        </div>
        <input
          type="email"
          className="LoginInputs profileInputs"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="LoginInputs profileInputs"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="LoginInputs profileInputs"
          type="number"
          placeholder="PinCode"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <input
          className="LoginInputs profileInputs"
          type="text"
          placeholder="Address Line 1"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
        />
        <input
          type="text"
          className="LoginInputs profileInputs"
          placeholder="Address Line2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
        <input
          type="number"
          c
          className="LoginInputs profileInputs"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          className="LoginInputs profileInputs"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          className="LoginInputs profileInputs"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />

        <input
          type="text"
          className="LoginInputs profileInputs"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="submit"
          className="LoginInputsSubmit LoginInputs"
          value="Save"
        />
      </form>
    </div>
  );
};

export default Profile;
