import React from "react";
import "./css/Notice.css";

function Announcement() {
  return (
    <div id="notice_standard">
        <p className="notice_txt_odd">&nbsp;공지 사항</p>
        <p className="notice_txt_even">&nbsp;&#40;공지&#41;&nbsp;문제발생시, 고객센터로 문의주세요.</p>
        <p className="notice_txt_odd">&nbsp;eroe 출시 이벤트!!</p>
        <p className="notice_txt_even">&nbsp;eroe어플리케이션 출시!!</p>
    </div>
  );
}

export default Announcement;