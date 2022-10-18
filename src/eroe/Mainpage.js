import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";
import User from "./User";
import Call from "./Call";
import {useNavigate} from "react-router-dom";

function Mainpage(props) {
  const navigate = useNavigate("")
  function onLogout() {
    const post = {
      out_id: props.id,
    };
    fetch("http://localhost:3001/logout", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.out == "logout") {
          props.getId("");
          navigate("/")
        } else {
          alert("Login failed");
        }
      });
  }
  /*
  const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }*/
  return (
    
    <div style={{ width: "100%" }}>
      <h2>메인페이지</h2>
      <button type='button' onClick={onLogout}>Logout</button>
      <div className="stand">
        <div className="map"><Location/></div>
        <div className="human"><User/></div>
      </div>
      <footer className="call">긴급 전화 번호 <Call/></footer>
    </div>
  );
}

export default Mainpage;