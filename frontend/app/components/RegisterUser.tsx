"use client"
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent , useState} from 'react'

// because you have to define even the type of props in typescript
// props interface has the name of the parameters and their types
interface Props{
  registerHandler: Function;
}

// the component
// passing registerHandler prop so uplift state to the main page and tell the app
// that user registration was successful and load back the login form
// couldn't redirect instead because both login and register are just different 
// components loading on the same URL so no redirect
// They are conditionally rendered depending on a "register" state on the basis of whether the user clicked on the JOIN NOW link and changed the register state to true
const RegisterUser = ({registerHandler}: Props) => {
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
      // Change the "register" state to false so the app loads back the login form, because they are condtionally rendered depending on the "register" state.
      registerHandler(false)
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
          // have to define the type of event, which a "change" event of an "HTMLInputElement"
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

        <button className="btn btn-info m-5" type="submit" disabled={isLoading}>
          {isLoading ? <span>Registering...</span> : <span>Proceed &#8594;</span>}
        </button>
      </form>
  )
}

export default RegisterUser
