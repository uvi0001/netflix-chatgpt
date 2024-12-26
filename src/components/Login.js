import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg' alt='logo'></img>
      </div>
      <form className='w-3/12 absolute bg-black left-0 right-0 mx-auto mt-20 text-white bg-opacity-80 rounded-md'>
        <h1 className='text-3xl font-bold py-8 px-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input className='mx-8 my-5 py-3 px-3 bg-gray-700  w-[80%] rounded-md' type='text' placeholder='Full Name'></input>}
        <input className='mx-8 my-5 py-3 px-3 bg-gray-700 w-[80%] rounded-md' type='email' placeholder='Please enter email'></input>
        <input className='mx-8 my-5 py-3 px-3 bg-gray-700 w-[80%] rounded-md' type='password' placeholder='Please enter password'></input>
        <button className='mx-8 my-5 py-3 px-3 bg-red-900 w-[80%] rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='mx-8 my-5 py-3 px-3 cursor-pointer' onClick={toggleSignInForm}>{!isSignInForm ? "New to Netflix? Sign up now." : "Already registered user. Sign In"}</p>
      </form>
    </div>

  )
}

export default Login