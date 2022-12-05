import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

function Findpw() {
    const [birth, setBirth] = useState("");
    const [name, setName] = useState("");
    const [birthCheck, setBirthcheck] = useState("True");
    const [nameCheck, setnameCheck] = useState("True");
  

    function onChangeBirth(e) {
        setBirth(e.target.value);
        setBirthcheck("True");
      }

        function onChangeName(e) {
        setName(e.target.value);
        setnameCheck("True");

      }

    function idchecking() {
        if (birth === "" ) {
            alert("생년월일 입력해주십시오."); 
            return;
         }
        if (name === "") {
            alert('이름을 입력해주십시오.')
            return;
        }
        else {
        const birthpost = { check_birth:birth };
        const namepost = { check_name: name };
        fetch("http://gakgya.iptime.org:3001/callbody_find", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(birthpost),
          body: JSON.stringify(namepost),

        })
          .then((res) => res.json())
          .then((json) => {
            setBirthcheck(json.ck);
            setnameCheck(json.ck);
            if (json.ck == "True") {
              alert("id 는", json.ck);
              setBirth("");
              setName("");
            } else if (json.ck == "False") {
              alert("정보가 일치하지 않습니다.");
            }
          });
      }
    }
    return(

        <div>
             <div className="Topbarstyle">
        <div className="Eroetext">eroe</div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      ></div>

     
      
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <div className="input_standard">
          <label className="id_txt">생년월일</label>
          <input
            className="id_box"
            type="id"
            value={birth}
            onChange={onChangeBirth}
          />
          <label className="password_txt">이름</label>
          <input
            className="password_box"
            type="name"        
            onChange={onChangeName}
          />
          <button onClick = {idchecking}>ID확인하기</button>
            
        
            </div>   
            </div>
            </div>
    )
    }

export default Findpw;