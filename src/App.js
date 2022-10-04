import "./App.css";
import Topbar from "./eroe/Topbar";
import React,{useEffect,useState} from 'react';
import { Route, Switch } from "react-router";
import Sidemenu from "./eroe/Sidemenu";
import Loginpage from './eroe/Loginpage';
import Mainpage from "./eroe/Mainpage";

function App() {
  // 로그인 상태 관리
  const [isLoginPage, setIsLoginPage] = useState(false)
 
  useEffect(() => {
    if(sessionStorage.getItem('user_id') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLoginPage ?? :: ', isLoginPage)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLoginPage(true)
      console.log('isLoginPage ?? :: ', isLoginPage)
    }
  })


  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Topbar />
      <div style={{ display: "flex", height: "90%" }}>
        <Sidemenu />
        <div>
        {isLoginPage ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Mainpage isLoginPage={isLoginPage} /> : 
        <Loginpage />}
    </div>
        
      </div>
    </div>
  );
}

export default App;