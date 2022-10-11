import { useState } from "react";
import React from "react";

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
      <h3>Sign Up</h3>
      <div>
        <div>
          <label>Id</label> <br />
          <input onChange={onChangeId} />
          <button onClick={onCall}>ID확인</button>
          <p>{idcheck}</p>
        </div>

        <div>
          <label>Name</label> <br />
          <input onChange={onChangeName} />
          <p>{name}</p>
        </div>
        <div>
          <label>Password</label> <br />
          <input onChange={onChangePassword} />
          <p>3</p>
        </div>
        <div>
          <label>Password Confirm</label> <br />
          <input onChange={onChangePasswordConfirm} />
          <p></p>
        </div>
        <div>
          <label>Email</label> <br />
          <input onChange={onChangeEmail} />
          <p>1</p>
        </div>
        <div>
          <label>Phone</label> <br />
          <input onChange={onChangePhone} />
          <p></p>
        </div>
        <div>
          <label>Birth</label> <br />
          <input onChange={onChangeBirth} />
          <p>2</p>
        </div>
        <br />
        <br />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default Signup;