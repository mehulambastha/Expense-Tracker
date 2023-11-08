"use client"
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent , useState} from 'react'

const RegisterUser = () => {
  const router = useRouter()

  // Defining the states for input values.
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [isLoading, setisLoading] = useState(false)

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setisLoading(true)

    const formData = {
      username,
      password,
    }

    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(response.status === 200) {
        setisLoading(false)
        console.log(formData)
      }
      
      return response.json()
      
    })
    .then((data)=>{
      setCookie(null, "accessToken" , data.accessToken, {
        maxAge: 60*60*4,
      })
      
      router.refresh()
      router.push("/dashboard")
    })
  }

    return (
      <form onSubmit={submitForm} action="POST">
        <label className="label">
          <span className="label-text">Enter username - no spaces!</span>
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
          <span className="label-text">Enter password</span>
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
        <button className="btn btn-info m-5" type="submit" disabled={isLoading}>
          {isLoading ? <span>Taking you in...</span> : <span>Login &#8594;</span>}
        </button>
      </form>
    )

}

export default RegisterUser
