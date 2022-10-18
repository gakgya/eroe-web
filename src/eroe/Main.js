import React from "react";
import { Router, Routes, Route, Switch, Link, BrowserRouter ,useNavigate} from "react-router-dom";
import Topbar from "./Topbar";
import Mainpage from "./Mainpage";
import * as Session from "./exportjs/Session.js";

function Main(props){
    const navigate = useNavigate();
    function check(){
        var ck_login = "False"
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
                console.log(ck_login)
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
                        <Mainpage getId = {props.getId}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;