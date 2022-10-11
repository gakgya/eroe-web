import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";
import User from "./User";
import Call from "./Call";

function Mainpage(props) {

  const isLogin = props.isLoginPage
    
  const onLogout = () => {
    	// sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('user_id')
        // App 으로 이동(새로고침)
        document.location.href = '/'
    }
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