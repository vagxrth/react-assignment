import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate(); 

    const loginRoute = () =>{ 
    let path = '/login'; 
    navigate(path);
  }

  const signupRoute = () =>{ 
    let path = '/signup'; 
    navigate(path);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen max-w-screen'>
        <div className='mb-5'>
            <h1 className='text-gray-800 text-4xl font-bold'>
            Leetcode
        </h1>
        </div>
        <div>
            <button className='bg-slate-500 text-white px-4 py-2 mr-4 rounded-lg' onClick={loginRoute}>
                Login
            </button>
            <button className='bg-slate-500 text-white px-4 py-2 rounded-lg' onClick={signupRoute}>
                Signup
            </button>
        </div>
    </div>
  )
}

export default Home