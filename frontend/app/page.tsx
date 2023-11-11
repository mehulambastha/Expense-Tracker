"use client"
import LoginUser from './components/LoginUser'
import { useState } from 'react'
import RegisterUser from './components/RegisterUser'

export default function Home() {

  const [register, setregister] = useState(false)

  const handleRegister = (registered: boolean) => {
    setregister(registered)
  }

  return (
    <div className="card bg-base-100 shadow-2xl border-2 m-auto align-middle">
      <div className="card-body">
        <h2 className="card-title">{register ? <span>Register</span> : <span>Login</span>} to continue</h2>
        <div className="form-control w-full max-w-xs">
          {/* Input form */}
          {!register ? <p>Haven&apos;t registered yet? <span className='cursor-pointer hover:underline-1 link-primary' onClick={()=>setregister(true)}>Join now!</span></p> : <span></span>}

          {register ? <RegisterUser registerHandler = {handleRegister}/> : <LoginUser />}          
        </div>
      </div>
      {/* <figure className="px-10 m-auto rounded"><Image className='m-auto rounded-lg' width={400} height={450} src="/images/loginImage.jpg" alt="Album"/></figure> */}
    </div>
  )
}
