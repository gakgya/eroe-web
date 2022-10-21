import React from "react";
import { Router, Routes, Route, Switch, Link, BrowserRouter ,useNavigate} from "react-router-dom";
import Topbar from "./Topbar";
import Mainpage from "./Mainpage";
import Mypage from "./Mypage";
import Notice from "./Notice";

function Main(props){
    const navigate = useNavigate();
    function check(){
        const idpost = {
            se_id: props.id,
          };
          fetch("http://localhost:3001/session", {
            method: "post", // 통신방법
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(idpost),
          })
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              if (json.login == "True") {
                console.log("")
              } else {
                navigate("/")
              }
            });
    }
    check();
    return (
        <div>
            <div>
                <div style={{ height: "100vh", overflow: "hidden" }}>
                    <Topbar />
                          <div style={{ display: "flex", height: "90%" }}>
                          <Routes>
                            <Route path="/mainpage/main" element={<Mainpage />}></Route>
                            <Route path="/mainpage/mypage" element={<Mypage getId = {props.id}/>}></Route>
                            <Route path="/mainpage/notice" element={<Notice />}></Route>
                          </Routes>                          
                          </div>
                </div>
            </div>
        </div>
    )
}

export default Main;