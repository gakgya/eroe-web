import React from "react";
import "./css/Mainpage.css";
import user from "./img/user.png";
import "./css/Mypage.css";

function Mypage() {
  return (
    <div>
        <p>
            <img
                className="Userimg"
                id="userimg"
                align="left"
                src={user}
                alt="user"
                onClick={{}}
            />
        사용자</p>
    </div>
  );
}

export default Mypage;