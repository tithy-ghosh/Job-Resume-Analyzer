import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
const Register = () => {
  const navigate = useNavigate()

  const[username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const {loading, handleRegister} = useAuth()
  const handleSubmission = async (e) => {
    e.preventDefault();

    await handleRegister({ username, email, password })
    navigate("/")
  }

  if(loading){
    return(
      <main>
        <h1>Loading......</h1>
      </main>
    )
  }
  return (
    <main className='min-h-screen w-full flex justify-center items-center'>
      <div className='min-h-[350px] flex flex-col gap-4 border border-b-gray-300 shadow-blue-400 shadow-lg' style={
        {
          "paddingInline": "10rem",
          "paddingBlock": "3rem"
          }}>
        <h1 className='text-center font-bold text-5xl'>Register</h1>
        <div className='border h-px w-[300px]'></div>
        <form className='flex flex-col gap-3' onSubmit={handleSubmission}>
          <div className='flex  flex-col gap-3 py-2 px-4'>
            <label htmlFor="username" className='text-3xl font-bold text-fuchsia-200'>Username</label>
            <input type="username" id='username' name='username' placeholder='Enter your username' className='input'
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex  flex-col gap-3 py-2 px-4'>
            <label htmlFor="email" className='text-3xl font-bold text-fuchsia-200'>Email</label>
            <input type="email" id='email' name='email' placeholder='Enter your email address' className='input'
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex  flex-col gap-3  '>
            <label htmlFor="email" className='text-3xl font-bold text-fuchsia-200'>Password</label>
            <input type="password" id='password' name='password' placeholder='Enter your password' className='input'
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='btn bg-[#a5183e]  active:scale-95'>Register</button>
          </form>

          <p className='text-center  text-sm'>Already have an account ? <Link to={"/login"} className='hover:underline text-blue-400'>Login</Link></p>
          
      </div>
    </main>
  )
}

export default Register
