import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Report.css";

function Report() {
  return (
    <div id="report_standard">
      <button onClick={{}} className="police_button">
        <a href="tel:112">112에 신고하기</a>
      </button>

      <button onClick={{}} className="firefighter_button">
        <a href="tel:119">119에 신고하기</a>
      </button>
    </div>
  );
}

export default Report;
