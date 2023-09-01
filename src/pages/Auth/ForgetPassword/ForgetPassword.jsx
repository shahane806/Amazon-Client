import React, { useState } from "react";
import "./ForgetPassword.css";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ForgetPassword = () => {
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");
  const [Visibility, setVisibility] = useState("password");
  const [changeIcon, setIcon] = useState(false);
  const handleForgetPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("ForgetPassword Successful");
    
  };
  const handleVisibilityIcon = () => {
    !changeIcon ? setVisibility("text") : setVisibility("password");
    setIcon(!changeIcon);
  };
  return (
    <div id="Login">
      <form onSubmit={handleForgetPasswordSubmit}>
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
            placeholder="Old Password"
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
          value="Forget Password"
        />
      </form>
    </div>
  );
};

export default ForgetPassword;
