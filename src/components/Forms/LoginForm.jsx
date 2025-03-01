import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useInput from '../../hooks/useInput'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [userId, setUserId] = useInput('')
  const [password, setPassword] = useInput('')

  return (
    <form className='mt-8 space-y-4'>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='user' className='h-4 w-4 opacity-70' />
        <input type="text" className="grow" placeholder="User ID" value={userId} onChange={setUserId}/>
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='key' className='h-4 w-4 opacity-70' />
        <input type="password" className="grow" placeholder="Password" value={password} onChange={setPassword}/>
      </label>
      <Link to="/forgot-password" className="link text-[12px] flex justify-center">Forgot Password?</Link>
      <input type="submit" value="Login" className="btn w-full" />
    </form>
  )
}

export default LoginForm
