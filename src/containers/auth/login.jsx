import React from 'react'
import logo from "../../assets/LogoIcon.svg"
import LoginComponent from '../../components/login/login'
import SuccessBtn from '../../components/buttons/success'
import "./_auth.scss"

function LoginContainer() {
  return (
    <div className='login__container'>
        <div className='login__container__top'>
            <img src={logo} alt="logo"/>
            <p>Login</p>
        </div>
        <div className='login__container__center'>
            <LoginComponent/>
        </div>
        <div className='login__container__bottom'></div>
    </div>
  )
}

export default LoginContainer
