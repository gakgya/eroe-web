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
          // props.getId();
          navigate("/");
        } else {
          alert("Logout failed");
        }
      });
  }

  return (
    <div>
      <div className ='standard'>
        <div className = 'user_box'>
       
       <div>
            <img
              className="user_name"
              id="userimg"
              align="left"
              src={user}
              alt="user"
              onClick={{}}     
            />
          <div className = 'user_nickname'> shiproadman
         </div>
         </div>

<div className = 'buttonbox'>
         <button type ='button' onClick ={onLogout} className ='user_info'>
          내 정보수정
         </button>
        

         <button type="button" onClick={onLogout} className = 'user_logoutbox' color = ''>
          Logout
        </button>  
        </div>
     
        </div>          
          </div>
          </div>
       
        
    
    
    
  );
}

export default Mypage;
