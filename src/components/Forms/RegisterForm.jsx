import React from 'react'

import useInput from '../../hooks/useInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RegisterForm = () => {
  const [name, setName] = useInput('')
  const [username, setUsername] = useInput('')
  const [email, setEmail] = useInput('')
  const [phone, setPhone] = useInput('')
  const [password, setPassword] = useInput('')
  const [confirmPassword, setConfirmPassword] = useInput('')

  return (
    <form className='mt-8 space-y-4'>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='id-card' className='h-4 w-4 opacity-70' />
        <input type="text" className="grow" placeholder="Name" value={name} onChange={setName} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='user' className='h-4 w-4 opacity-70' />
        <input type="text" className="grow" placeholder="Username" value={username} onChange={setUsername} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='at' className='h-4 w-4 opacity-70' />
        <input type="email" className="grow" placeholder="Email" value={email} onChange={setEmail} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='phone' className='h-4 w-4 opacity-70' />
        <input type="phone" className="grow" placeholder="Phone" value={phone} onChange={setPhone} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='key' className='h-4 w-4 opacity-70' />
        <input type="password" className="grow" placeholder="Password" value={password} onChange={setPassword} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <FontAwesomeIcon icon='key' className='h-4 w-4 opacity-70' />
        <input type="password" className="grow" placeholder="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} />
      </label>
      <input type="submit" value="Register" className="btn w-full" />
    </form>
  )
}

export default RegisterForm
