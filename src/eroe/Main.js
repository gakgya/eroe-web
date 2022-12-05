import React from "react";
import { useState } from "react";
import {
  Router,
  Routes,
  Route,
  Switch,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import Topbar from "./Topbar";
import Mainpage from "./Mainpage";
import Mypage from "./Mypage";
import Notice from "./Notice";
import Report from "./Report";
import Adduser from "./Adduser";
import Modifymyinfo from "./Modifymyinfo";
import Modifyuserinfo from "./Modifyuserinfo";
import Locationinfo from "./Locationinfo";
import Setting from "./Setting";
import Announcement from "./Announcement";
import Servicecenter from "./Servicecenter";

function Main(props) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  function check() {
    const idpost = {
      se_id: props.id,
    };
    fetch("http://gakgya.iptime.org:3001/session", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(idpost),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.login === "True") {
          console.log("");
          setName(json.user);
        } else {
          navigate("/");
        }
      });
  }
  check();
  return (
    <div>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <Topbar />
        <div>
          <Routes>
            <Route path="/main" element={<Mainpage />}></Route>
            <Route
              path="/mypage"
              element={<Mypage getId={props.id} id={props.id} name={name} />}
            ></Route>
            <Route path="/notice" element={<Notice />}></Route>
            <Route path="/report" element={<Report />}></Route>
            <Route path="/adduser" element={<Adduser />}></Route>
            <Route path="/modifymyinfo" element={<Modifymyinfo />}></Route>
            <Route path="/modifyuserinfo" element={<Modifyuserinfo />}></Route>
            <Route path="/locationinfo" element={<Locationinfo />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/announcement" element={<Announcement />}></Route>
            <Route path="/servicecenter" element={<Servicecenter />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
