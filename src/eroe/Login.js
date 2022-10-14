import { useState } from "react";
import React from "react";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  let asd = ""

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
          alert("Login successful");
          asd = "/mainpage"
        } else {
          alert("Login failed");
        }
      });
  }

  return (
    <>
      <h2>로그인 창</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
        >
          <label>Email</label>
          <input type="id" value={id} onChange={onChangeId} />
          <label>Password</label>
          <input type="password" value={password} onChange={onChangePassword} />

          <br />
          <button type="button" onClick={check}>
            로그인
          </button>
          <button type="button" onClick={OnSignUp}>
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;