import React from "react";
import { useState } from "react";
import "./css/Module.css";

function Module() {
    const [module_id,setModule_id] = useState("");

    module_id = 0;

    function onChangeModule_id(e) {
        setModule_id(e.target.value);
    }

  return (
    <div id="module_standard">
        <div id="circle">모듈검색중</div>
        <button onClick={onChangeModule_id} className="setModule_id_button">
            모듈 검색 완료
        </button>
    </div>
  );
}

export default Module;