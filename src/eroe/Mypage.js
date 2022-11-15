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
          <button type="button" onClick={onLogout} className = 'user_logout'>
          Logout
        </button>
        <button type ='button' className ='user_info'onClick={()=>{
          navigate('/mainpage/modifymyinfo')
        }}>  
          내 정보수정
        </button>
        </div>
        </div>        
        </div>
      </div>
      </div>
    
  );
}

export default Mypage;
