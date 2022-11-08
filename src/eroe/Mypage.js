import React from "react";
import "./css/Mainpage.css";
import user from "./img/user.png";
import "./css/Mypage.css";
import { useNavigate } from "react-router-dom";

function Mypage(props) {
  const navigate = useNavigate("");
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
          navigate("/");
        } else {
          alert("Logout failed");
        }
      });
  }

  return (
    <div id="standard">
      <div className="user_box">
        <div className="user_name">
          <p>
            <img
              className="Userimg"
              id="userimg"
              align="left"
              src={user}
              alt="user"
              onClick={{}}
            />
            사용자
          </p>
        </div>

        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Mypage;
