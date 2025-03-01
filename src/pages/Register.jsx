import React from 'react'
import { Link } from 'react-router-dom'

import navIcon from '../assets/img/nav-icon.png'

import Layouts from '../components/Layouts/Layouts'
import RegisterForm from '../components/Forms/RegisterForm'

const Register = () => {
  return (
    <Layouts>
      <div className='card bg-base-100 shadow-xl p-10 w-96 mx-auto'>
        <img src={navIcon} alt="nav-icon" className="w-[60%] mx-auto" />
        <RegisterForm />
        <div className="text-center text-[14px] space-y-4 mt-4"> 
          <p>
            Already have an account? {}
            <Link to="/login" className="link">Login</Link>
          </p> 
        </div>
      </div>
    </Layouts>
  )
}

export default Register
