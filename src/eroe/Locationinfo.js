import React, { useState } from "react";
import Location from "./Location";
import "./css/Location_info.css";
import user from "./img/user.png";

function Location_info() {

  const [addr, setAddr] = useState("")

  const getAddr = (addr) => {
    setAddr(addr);
  }

  return (
    <div className="location_info_standard">
      <div className="location_map">
        <Location getAddr={getAddr}/>
      </div>
      <div className = "standard location_user">
          <div style={{backgroundColor: "white", borderRadius: 30}}>
        <div className ='location_user_box'>     
        <div className = 'user'>
              <img
                className="user_name"
                src={user}
                alt="user"
                onClick={{}}     
              />
            </div>
            <div>
              <h3 className="location_user_text">현재주소</h3>
              <p className="location_user_text">{addr}</p>
            </div>   
          </div>        
          </div>
        </div>
    </div>
  );
}

export default Location_info;
