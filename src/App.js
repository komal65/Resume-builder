import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Login from "./components/login";
import "./App.css";
import { gapi } from "gapi-script";
import SignIn from "./components/login";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
const clientId =
  "361102340568-4g5oqh4fu0vr5aglh6apigtegs0joelv.apps.googleusercontent.com";

function App() {
  const [profile, setprofile] = useState([]);
  const [signin, setsignin] = useState(false);

  function change(profile) {
    setprofile(profile);
    setsignin(true);
    console.log(profile);
    console.log(profile.imageUrl);
  }

  return (
    <div className="App">
      {signin && (
        <div
          style={{ display: "flex", justifyContent: "flex-end", padding: "1%" }}
        >
          <Typography style={{ padding: "1%" }}>{profile.name}</Typography>
          <Avatar alt={profile.name} src={profile.imageUrl} />
        </div>
      )}
      <Header />
      <div
        className="login"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!signin && <Login change={change}></Login>}
      </div>

      {signin && <Body />}
    </div>
  );
}

export default App;
