import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../ ../ ../_actions/user_action'
import {registerUser} from '../ ../ ../_actions/user_action'
import {withRouter} from 'react-router-dom'

function RegisterPage(props) {

    const dispatch =useDispatch();

    const [Email,setEmail] = React.useState(" ")
    const [Password, setPassword] = React.useState(" ")
    const [Name, setName] = React.useState(" ")
    const[ConfirmPassword, setConfirmPassword] = React.useState(" ")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //리플레시 방지 -> 방지해야 이 아래 라인의 코드들 실행 가능
        // console.log('Email', Email);
        // console.log('Password', Password);

        //비밀번호와 비밀번호 확인 같을때 회원가입 되게 함
        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 일치해야 합니다.')
        }

        let body ={
            email: Email,
            password: Password,
            name: Name
        }

        //디스패치로 액션 취하기
        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/login')
            } else {
                alert('Failed to sign up')
            }
        })

    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width:'100%', height: '100vh' 
        }}>

            <form style={{display:'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type = "email" value={Email} onChange={onEmailHandler}/>

                <label>Name/</label>
                <input type = "name" value={Name} onChange={onNameHandler}/>

                <label>Passwword</label>
                <input type = "password" value={Password} onChange={onPasswordHandler}/>

                <label>Confirm Password</label>
                <input type = "password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                <br />
                <button>
                    회원가입
                </button>
            </form>
        </div>
    )
}

//export default RegisterPage

//export default withRouter(RegisterPage)

import Axios from 'axios';
import {
    LOGIN_USER, REGISTER_USER
}from './types';

export function loginUser(dataTosubmit) {

    const request = Axios.post('/api/users/login', dataTosubmit) //서버에 리퀘스트 날리고
    .then(response => response.data) //받은 데이터를 request에 저장

    return { //Action 했으니깐 이제 Reducer로 보냄
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataTosubmit) {

    const request = Axios.post('/api/users/register', dataTosubmit) //서버에 리퀘스트를 날리고
    .then(response => response.data) // 받은 데이터를 request에 저장

    return { //Action 했으니깐 이제 Reducer로 보냄
        type: REGISTER_USER,
        payload: request
    }
}

//action의 타입들만 관리하는 파일
export const LOGIN_USER = "login_user";
export const REGISTER_USER = "register_user";

//user_reducer.js
import {LOGIN_USER, REGISTER_USER} from '../_actions/types';

export default function(state={}, action) { //state는 이전상태

    switch(action.type){ //Action에는 여러타입 존재함 이 타입에 따라 다르게 반응하도록 작성
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload} //... : spread operator은 파라미터 state를 그대로 가져온 것으로 빈 상태를 의미
            break;

        case REGISTER_USER:
            return {...state, register: action.payload}
            break;

        default:
            return state;
    }
}