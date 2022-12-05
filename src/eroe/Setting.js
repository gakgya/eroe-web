import React from "react";
import "./css/Setting.css";
import { useNavigate } from "react-router-dom";

function Setting () {

    const navigate = useNavigate("");

    return(
        <div>
            <button className="setting_button">설정</button>
            <button onClick={() => {
                navigate("/mainpage/announcement");
                }} className="notice_button">공지사항</button>
            <button onClick={{}} className="notice_setting_button">알림 설정</button>
            <button onClick={{}} className="service_center_button">고객센터</button>
        </div>
    );
}

export default Setting;