import "./App.css";
import Topbar from "./eroe/Topbar";
import React, { useEffect, useState } from "react";
import {
  Router,
  Routes,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Mainpage from "./eroe/Mainpage";
import Login from "./eroe/Login";
import Signup from "./eroe/Signup";
import NotFound from "./eroe/NotFound";
import Main from "./eroe/Main";

function App() {
  const [loginid, setLoginId] = useState("");
  const getId = (text) => {
    setLoginId(text);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login getId={getId} />}></Route>
          <Route
            path="/mainpage/*"
            element={<Main id={loginid} getId={getId} />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

    // <div style={{ height: "100vh", overflow: "hidden" }}>
    //  <Topbar />
    //   <div style={{ display: "flex", height: "90%" }}>
    //     <Mainpage />
    //   </div>
    // </div>
  );
}

export default App;
