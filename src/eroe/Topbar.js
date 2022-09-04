import React from "react";
import "./css/Topbar.css";
import menuimg from "./img/menu.png";
import notifi from "./img/notification.png";
import user from "./img/user.png";

function Topbar() {
  function menu() {
    console.log("menu");
  }

  return (
    <div>
      <div className="Topbarstyle">
        <img
          className="topbarimg"
          id="menuimg"
          src={menuimg}
          onClick={menu}
          alt="menu"
        />
        <div className="Eroetext">
          <div>eroe</div>
        </div>
        <img className="topbarimg" id="notifiimg" src={notifi} alt="notifi" />
        <img
          className="topbarimg"
          id="userimg"
          src={user}
          alt="user"
          onClick={{}}
        />
      </div>
    </div>
  );
}
export default Topbar;
