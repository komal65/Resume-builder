import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";

import { gapi } from "gapi-script";
import { DivideSquare } from "react-feather";

export default function SignIn(props) {
  const clientId =
    "361102340568-4g5oqh4fu0vr5aglh6apigtegs0joelv.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  async function googleLogin(accesstoken) {
    // console.log(accesstoken);
  }
  googleLogin();

  const responseGoogle = (response) => {
    props.change(response.profileObj);
    googleLogin(response.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId="361102340568-4g5oqh4fu0vr5aglh6apigtegs0joelv.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
