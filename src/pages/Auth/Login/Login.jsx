import React, { useState } from "react";
import "./Login.css";
import { login } from "../../../actions/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");
  const [Visibility, setVisibility] = useState("password");
  const [changeIcon, setIcon] = useState(false);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Successful");
    dispatch(login({UserId , Password},navigate));
  };
  const handleVisibilityIcon = () => {
    !changeIcon ? setVisibility("text") : setVisibility("password");
    setIcon(!changeIcon);
  };
  return (
    <div id="Login">
      <form onSubmit={handleLoginSubmit}>
        <div className="LoginIcon">
          <input
            className="LoginInputs"
            type="text"
            placeholder="UserId"
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <EmailIcon className="LoginIcon" />
        </div>
        <div className="LoginIcon">
          <input
            className="LoginInputs"
            type={Visibility}
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!Password ? (
            <KeyIcon className="LoginIcon" />
          ) : !changeIcon ? (
            <VisibilityOffIcon
              className="LoginIcon"
              onClick={handleVisibilityIcon}
            />
          ) : (
            <VisibilityIcon
              className="LoginIcon"
              onClick={handleVisibilityIcon}
            />
          )}
        </div>

        <input
          className="LoginInputs LoginInputsSubmit"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
