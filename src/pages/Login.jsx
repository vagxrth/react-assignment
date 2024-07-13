import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate = useNavigate();

  const problems = () => {
    let path = '/problems';
    navigate(path);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen max-w-screen'>
      <div className='mb-5'>
            <h1 className='text-gray-800 text-4xl font-bold'>
            Login to Leetcode
        </h1>
        </div>
        <div>
          <input type="text" placeholder='email' className='border-2 border-black px-4 py-2 rounded-lg mb-4 mr-2' />
          <input type="password" placeholder='password' className='border-2 border-black px-4 py-2 rounded-lg mb-4' />
        </div>
        <div>
          <button className='bg-slate-500 text-white px-4 py-2 rounded-lg' onClick={problems}>
              Login
          </button>
        </div>
    </div>
  )
}

export default Login