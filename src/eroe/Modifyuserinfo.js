import { useLayoutEffect, useRef, useState } from "react";
import React from "react";
import "./css/Modifyuserinfo.css";
import { Link, useNavigate } from "react-router-dom";

function Modifyuserinfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangeBirth(e) {
    setBirth(e.target.value);
  }
  function onChangeSex(e) {
    setSex(e.target.value);
  }
  function onChangePhone(e) {
    setPhone(e.target.value);
  }
  function onChangeAddress(e) {
    setAddress(e.target.value);
  }
  function submit() {
    if (name === "") {
      alert("이름을 입력해주십시오.");
      return;
    } else if (birth === "") {
      alert("생일을 입력해주십시오.");
      return;
    } else if (sex === "") {
      alert("성별을 입력해주십시오.");
      return;
    } else if (phone === "") {
      alert("휴대폰 번호를 입력해주십시오.");
      return;
    } else if (address === "") {
      alert("주소를 입력해주십시오.");
      return;
    } else {
      const post = {
        post_name: name,
        post_birth: birth,
        post_sex: sex,
        post_phone: phone,
        post_address: address,
      };
      fetch("http://gakgya.iptime.org:3001/idplz", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      }).then((res) => res.json());
      navigate("/");
    }
  }

  return (
    <>
      <h3 className="modifyuserinfo_txt">사용자 정보 수정</h3>
      <div className="modifyuserinfo_standard">
        <div>
          <div>
            <label className="name_txt">이름</label> <br />
            <input onChange={onChangeName} className="name_box" />
          </div>
          <div>
            <label className="birth_txt">생년월일</label> <br />
            <input onChange={onChangeBirth} className="birth_box" />
          </div>
          <div>
            <label className="sex_txt">성별</label> <br />
            <input onChange={onChangeSex} className="sex_box" />
          </div>
          <div>
            <label className="phone_txt">전화번호</label> <br />
            <input onChange={onChangePhone} className="phone_box" />
          </div>
          <div>
            <label className="address_txt">주소</label> <br />
            <input onChange={onChangeAddress} className="address_box" />
          </div>
          <button onClick={submit} className="submit_button">
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default Modifyuserinfo;
