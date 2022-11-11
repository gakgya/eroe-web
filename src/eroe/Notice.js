import React from "react";
import "./css/Notice.css";

function Notice() {
  return (
    <div id="notice_standard">
        <p className="notice_txt_odd">알림</p>
        <p className="notice_txt_even">&nbsp;'배남길'님이 외출하셨습니다.</p>
        <p className="notice_txt_odd">&nbsp;'배남길'님이 복귀하셨습니다.</p>
        <p className="notice_txt_even">&nbsp;'배남길'님이 외출하셨습니다.</p>
    </div>
  );
}

export default Notice;