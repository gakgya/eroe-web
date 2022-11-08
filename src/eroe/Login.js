import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Login.css";

function Login(props) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  function onChangeId(e) {
    setId(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function OnSignUp(e) {}
  function check() {
    const post = {
      post_id: id,
      post_password: password,
    };
    fetch("http://localhost:3001/login", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.login == "True") {
          props.getId(id);
          navigate("/mainpage/main");
        } else {
          alert("Login failed");
        }
      });
  }

  return (
    <>
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
      >
        <div className="input_standard">
          <label className="id_txt">아이디</label>
          <input
            className="id_box"
            type="id"
            value={id}
            onChange={onChangeId}
          />
          <label className="password_txt">비밀번호</label>
          <input
            className="password_box"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <div>
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
          </div>
          <button className="login_button" onClick={check}>
            로그인
          </button>{" "}
          <Link to="/signup">
            <button className="signup_button" onClick={OnSignUp}>
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
