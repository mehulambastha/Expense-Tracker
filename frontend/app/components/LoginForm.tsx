"use client"
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent , useState} from 'react'

const LoginForm = () => {
  const router = useRouter()

  // Defining the states for input values.
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [initialBalance, setinitialBalance] = useState(0)
  const [isLoading, setisLoading] = useState(false)

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setisLoading(true)

    const formData = {
      username, 
      email,
      password,
      balance: initialBalance
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    if(res.status === 200) {
      setisLoading(false)
      console.log(formData)
      router.refresh()
      router.push("/")
    }

  }
  return (
      <form onSubmit={submitForm} action="POST">
        <label className="label">
          <span className="label-text">Choose a username</span>
        </label>
        <input 
          type="text" 
          placeholder="Username"
          name="username" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setusername(e.currentTarget.value)
          }} 
          className="input input-bordered w-full max-w-xs" 
        />

        <label className="label">
          <span className="label-text">Enter your email</span>
        </label>
        <input 
          type="email" 
          placeholder="example@abc.com" 
          name="email" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setemail(e.currentTarget.value)
          }} 
          className="input input-bordered w-full max-w-xs" 
        />

        <label className="label">
          <span className="label-text">Choose a password</span>
        </label>
        <input 
          type="password" 
          placeholder="Top-Secret password here" 
          name="password" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            setpassword(e.currentTarget.value)
          }} 
          className="input input-bordered w-full max-w-xs" 
        />

        <label className="label">
          <span className="label-text">Initial Balance</span>
        </label>
        <input 
          type="number" 
          placeholder="$" 
          name="balance" 
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            const userinputbalance = parseInt(e.currentTarget.value)
            setinitialBalance(userinputbalance)
          }} 
          className="input input-bordered w-full max-w-xs" 
        />

        <button className="btn btn-info p-5 m-5" type="submit" disabled={isLoading}>
          {isLoading ? <span>Registering...</span> : <span>Proceed &#8594;</span>}
        </button>
      </form>
  )
}

export default LoginForm
