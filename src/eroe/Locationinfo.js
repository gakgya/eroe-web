import React from "react";
import Location from "./Location";
import "./css/Location_info.css";
import user from "./img/user.png";

function Location_info() {
  return (
    <div className="location_info_standard">
      <div className="location_map">
        <Location />
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
            <pre>
              현재주소<br/>
              신구대학교 남관
            </pre>        
          </div>        
          </div>
        </div>
    </div>
  );
}

export default Location_info;
