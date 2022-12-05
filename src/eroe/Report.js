import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Report.css";

function Report() {
  return (
    <div id="report_standard">
      <a href="tel:112">
        <button onClick={{}} className="police_button">
          112에 신고하기
        </button>
      </a>
      <a href="tel:119">
        <button onClick={{}} className="firefighter_button">
          119에 신고하기
        </button>
      </a>
    </div>
  );
}

export default Report;
