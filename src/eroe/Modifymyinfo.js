import { useLayoutEffect, useRef, useState } from "react";
import React from "react";
import "./css/Modifymyinfo.css";
import { Link, useNavigate } from "react-router-dom";

function Modifymyinfo(props) {
  const navigate = useNavigate();
  const mo_id = props.id;
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeBirth(e) {
    setBirth(e.target.value);
  }
  function onChangeMail(e) {
    setMail(e.target.value);
  }
  function onChangePhone(e) {
    setPhone(e.target.value);
  }

  function submit() {
    if (name === "") {
      alert("이름을 입력해주십시오.");
      return;
    } else if (birth === "") {
      alert("생일을 입력해주십시오.");
      return;
    } else if (mail === "") {
      alert("성별을 입력해주십시오.");
      return;
    } else if (phone === "") {
      alert("휴대폰 번호를 입력해주십시오.");
      return;
    } else {
      const post = {
        ck_id: mo_id,
        post_name: name,
        post_birth: birth,
        post_mail: mail,
        post_phone: phone,
      };
      fetch("http://localhost:3001/modifyuser", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          if (json.modi == "True") {
            navigate("/mainpage/mypage");
          } else {
            alert("정보수정 실패");
          }
        });
    }
  }

  return (
    <>
      <h3 className="modifymyinfo_txt">내 정보 수정</h3>
      <div className="modifymyinfo_standard">
        <div>
          <div>
            <label className="txt">이름</label> <br />
            <input onChange={onChangeName} className="box" />
          </div>
          <div>
            <label className="txt">생년월일</label> <br />
            <input onChange={onChangeBirth} className="box" />
          </div>
          <div>
            <label className="txt">이메일</label> <br />
            <input onChange={onChangeMail} className="box" />
          </div>
          <div>
            <label className="txt">전화번호</label> <br />
            <input onChange={onChangePhone} className="box" />
          </div>
          <button onClick={submit} className="submit_button">
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default Modifymyinfo;
