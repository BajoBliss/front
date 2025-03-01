import React from 'react'
import { Link } from 'react-router-dom'

import navIcon from '../assets/img/nav-icon.png'

import LoginForm from '../components/Forms/LoginForm'
import Layouts from '../components/Layouts/Layouts'

const Login = () => {
  return (
    <Layouts>
      <div className='card bg-base-100 shadow-xl p-10 w-96 mx-auto'>
        <img src={navIcon} alt="nav-icon" className="w-[60%] mx-auto" />
        <LoginForm />
        <div className="text-center space-y-4 mt-4"> 
          <p>Or</p>
          <button className='btn w-full'>
            <img className="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            <span>Login with Google</span>
          </button>
          <p className='mt-4 text-[14px]'>
            Don't have a account? {}
            <Link to="/register" className="link">Register</Link>
          </p>
          {/* <button className="btn w-full" onClick={() => navigate('/register')}>Register</button> */}
        </div>
      </div>
    </Layouts>
  )
}

export default Login
