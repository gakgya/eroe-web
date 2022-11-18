import { useEffect, useState } from "react";
import React from "react";
import Modal from "./Modal";
import "./css/Sidemenu.css";

function Sidemenu() {
  
  return (
    <div className="Sidemenu">
      
      
      <ul>
        <li>my page</li>
        <li>사용자 설정</li>
        <li>신고하기</li>
        <li>설정</li>
      </ul>
    </div>
  );
}

export default Sidemenu;
