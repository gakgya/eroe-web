import { useState } from "react";
import React from "react";
import "./css/Signup.css";

function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [idcheck, setIdcheck] = useState("False");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePhone(e) {
    setPhone(e.target.value);
  }
  function onChangeBirth(e) {
    setBirth(e.target.value);
  }
  function submit() {
    const post = {
      post_id: id,
      post_password: password,
      post_name: name,
      post_email: email,
      post_phone: phone,
      post_birth: birth,
    };
    fetch("http://localhost:3001/idplz", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  }
  function onCall() {
    const idpost = { check_id: id };
    fetch("http://localhost:3001/callbody", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(idpost),
    })
      .then((res) => res.json())
      .then((json) => {
        setIdcheck(json.ck);
        console.log(json);
      });
  }

  return (
    <>
      <h3 className="signup_txt">회원가입</h3>
      <div>
        <div>
          <label className="id_txt">아이디</label> <br />
          <input onChange={onChangeId} className="id_box" />
          <button onClick={onCall}>ID확인</button>
          <p>{idcheck}</p>
        </div>

        <div>
          <label className="password_txt">비밀번호</label> <br />
          <input onChange={onChangePassword} className="password_box"/>
          <p>3</p>
        </div>
        <div>
          <label className="passwordconfirm_txt">비밀번호 확인</label> <br />
          <input onChange={onChangePasswordConfirm} className="passwordconfirm_box"/>
          <p></p>
        </div>
        <div>
          <label className="name_txt">이름</label> <br />
          <input onChange={onChangeName} className="name_box"/>
          <p>{name}</p>
        </div>
        <div>
          <label className="email_txt">이메일</label> <br />
          <input onChange={onChangeEmail} className="email_box"/>
          <p>1</p>
        </div>
        <div>
          <label className="phone_txt">전화번호</label> <br />
          <input onChange={onChangePhone} className="phone_box" />
          <p></p>
        </div>
        <div>
          <label className="birth_txt">생년월일</label> <br />
          <input onChange={onChangeBirth} className="birth_box"/>
          <p>2</p>
        </div>
        <br />
        <br />
        <button onClick={submit} className="sumbit_button">저장</button>
      </div>
    </>
  );
}

export default Signup;