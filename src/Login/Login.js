import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import WhatsAppLogo from "../Assets/WhatsAppLogo.svg";
import { auth, provider } from "../firebaseSetup";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(
        (result) =>
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
        // console.log(result)
      )
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      {/* div.login_container */}
      <div className="login_container">
        {/* <WhatsApp /> */}
        <img src={WhatsAppLogo} alt="whats app logo" />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
