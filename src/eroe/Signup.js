import { useLayoutEffect, useRef, useState } from "react";
import React from "react";
//import "./css/Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordtxt, setPasswordtxt] = useState("");
  const [idcheck, setIdcheck] = useState("True");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  function onChangeId(e) {
    setId(e.target.value);
    setIdcheck("True");
  }
  function onChangeName(e) {
    setName(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangePasswordConfirm(e) {
    if (password === e.target.value) {
      setPasswordtxt("비밀번호가 일치 합니다.");
      setPasswordConfirm("True");
    } else {
      setPasswordtxt("비밀번호가 일치 하지 않습니다.");
      setPasswordConfirm("False");
    }
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
    if (id === "") {
      alert("아이디를 입력해주십시오.");
      return;
    } else if (password === "") {
      alert("비밀번호를 입력해주십시오.");
      return;
    } else if (name === "") {
      alert("이름을 입력해주십시오.");
      return;
    } else if (email === "") {
      alert("이메일을 입력해주십시오.");
      return;
    } else if (phone === "") {
      alert("휴대폰 번호를 입력해주십시오");
      return;
    } else if (birth === "") {
      alert("생일을 입력해주십시오");
      return;
    } else if (idcheck === "True") {
      alert("사용가능한 아이디를 입력해주십시오.");
      return;
    } else if (passwordConfirm === "False") {
      alert("비밀번호가 일치 하지 않습니다.");
      return;
    } else {
      const post = {
        post_id: id,
        post_password: password,
        post_passwordConfirm: passwordConfirm,
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
      navigate("/");
    }
  }
  function onCall() {
    if (id === "") {
      alert("아이디를 입력해주십시오.");
      return;
    } else {
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
          if (json.ck == "True") {
            alert("이미 사용중인 아이디 입니다..");
            setId("");
          } else if (json.ck == "False") {
            alert("사용가능한 아이디 입니다");
          }
        });
    }
  }

  return (
    <>
      <h3 className="signup_txt">회원가입</h3>
      <div>
        <div>
          <label /* className="id_txt"*/>아이디</label> <br />
          <input onChange={onChangeId} value={id} /* className="id_box" */ />
          <button onClick={onCall}>ID확인</button>
        </div>
        <div>
          <label /*className="password_txt"*/>비밀번호</label> <br />
          <input onChange={onChangePassword} /*className="password_box"*/ />
        </div>
        <div>
          <label className="passwordconfirm_txt">비밀번호 확인</label> <br />
          <input
            onChange={onChangePasswordConfirm}
            className="passwordconfirm_box"
          />
          <p>{passwordtxt}</p>
        </div>
        <div>
          <label className="name_txt">이름</label> <br />
          <input onChange={onChangeName} className="name_box" />
        </div>
        <div>
          <label className="email_txt">이메일</label> <br />
          <input onChange={onChangeEmail} className="email_box" />
        </div>
        <div>
          <label className="phone_txt">전화번호</label> <br />
          <input onChange={onChangePhone} className="phone_box" />
        </div>
        <div>
          <label className="birth_txt">생년월일</label> <br />
          <input onChange={onChangeBirth} className="birth_box" />
        </div>
        <button onClick={submit} className="sumbit_button">
          저장
        </button>
      </div>
    </>
  );
}

export default Signup;
