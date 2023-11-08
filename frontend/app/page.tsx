import Image from 'next/image'
import { FormEvent } from 'react'
import LoginForm from './components/LoginForm'

export default function Home() {

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const req = await fetch("http://localhost:5001/register")
  }


  return (
    <div className="card glass card-side bg-base-150 shadow-2xl w-3/5 border-2 m-auto align-middle">
      <figure><Image className='m-auto' width={400} height={450} src="/images/loginImage.jpg" alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">Login/Register to continue!</h2>
        <div className="form-control w-full max-w-xs">
          {/* Input form */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
