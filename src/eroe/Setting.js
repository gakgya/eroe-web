import React from "react";
import "./css/Setting.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233,233,234);}
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0,200,102);
    transition : 0.5s
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255,254,255);
    transition : 0.5s
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  } >.toggle--checked {
    left: 27px;
    transition : 0.5s
  }
`;

function Setting () {

    const [isOn, setisOn] = useState(false);
    const navigate = useNavigate("");

    const toggleHandler = () => {
        setisOn(!isOn)
      };

    return(
        <div>
            <button className="setting_button">설정</button>
            <button onClick={() => {
              navigate("/mainpage/announcement");
            }} className="notice_button">공지사항</button>
            <div className="notice_setting_button">
                <div style={{width:"55px" , paddingLeft:"33px"}}></div>
                <p className="center">알림 설정</p>
                <ToggleContainer className="to" onClick={toggleHandler}>
                    <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
                    <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
                </ToggleContainer>
            </div>
            <button onClick={() => {
              navigate("/mainpage/servicecenter");
            }} className="service_center_button">고객센터</button>
            
        </div>
    );
}

export default Setting;