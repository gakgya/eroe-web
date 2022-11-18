import React from "react";
import { useNavigate } from "react-router-dom";
import user from "./img/user.png";

function User() {

    const navigate = useNavigate("");

    return (
        <div>
        <div className = 'standard'>
          <div>
        <div className ='user_box'>     
        <div className = 'user'>
              <img
                className="user_name"
                src={user}
                alt="user"
                onClick={{}}     
              />
            배길남 
            </div>        
        <div className = 'gib'>
            <button type="button" className ='user_info'onClick={()=>{
            navigate('/mainpage/locationinfo')
          }}>
            위치 확인
          </button>
          <button type ='button' className ='user_info'onClick={()=>{
            navigate('/mainpage/locationinfo')
          }}>  
            내 정보수정
          </button>
          </div>
          </div>        
          </div>
        </div>
      </div>
    )
}

export default User;