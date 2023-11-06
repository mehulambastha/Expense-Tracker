import Image from 'next/image'
import SubmitLoginButton from './components/SubmitLoginButton'

export default function Home() {
  return (
    <div className="card card-side bg-base-150 shadow-2xl w-3/5 border-2 m-auto align-middle">
      <figure><Image className='m-auto' width={400} height={450} src="/images/loginImage.jpg" alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">Login/Register to continue!</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose a username</span>
          </label>
          <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />

          <label className="label">
            <span className="label-text">Enter you email</span>
          </label>
          <input type="text" placeholder="example@abc.com" className="input input-bordered w-full max-w-xs" />

          <label className="label">
            <span className="label-text">Choose a password</span>
          </label>
          <input type="text" placeholder="Top-Secret password here" className="input input-bordered w-full max-w-xs" />

          <label className="label">
            <span className="label-text">Initial Balance</span>
          </label>
          <input type="text" placeholder="$" className="input input-bordered w-full max-w-xs" />

          <SubmitLoginButton />
        </div>
      </div>
    </div>
  )
}
