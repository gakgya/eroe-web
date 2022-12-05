import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

function Findid() {
  const [birth, setBirth] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [birthCheck, setBirthcheck] = useState("True");
  const [idcheck, setIdcheck] = useState("True");
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
    if (birth === "") {
      alert("생년월일 입력해주십시오.");
      return;
    }
    if (name === "") {
      alert("이름을 입력해주십시오.");
      return;
    } else {
      const post = {
        check_birth: birth,
        check_name: name,
      };

      fetch("http://gakgya.iptime.org:3001/callbody_find", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((json) => {
          setIdcheck(json.ck1);
          console.log(json);
          if (json.ck == "True") {
            alert("id는 이거다" + json.ckh);
            setBirth("");
            setName("");
          } else if (json.ck1 == "False") {
            alert("정보가 일치하지 않습니다.");
          }
        });
    }
  }
  return (
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
          <input className="password_box" type="name" onChange={onChangeName} />
          <div>
          <button className = 'signup_button2'style = {{marginTop : 15}}onClick={idchecking}>ID찾기</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Findid;
