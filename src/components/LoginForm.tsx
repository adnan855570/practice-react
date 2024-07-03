import { SyntheticEvent, useState } from "react"

const LoginForm = () => {
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
    const submitForm = (ev : SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        console.log(target , {
            email,
            password
        });
    }

  return (
    <form  className="flex flex-col gap-4" onClick={submitForm}>
        <input onChange={(ev) => {
            setEmail(ev.target.value);
        }} type="email" placeholder="Enter your email"/>
        <input onChange={(ev) => {
            setPassword(ev.target.value);
        }} type="password" placeholder="Enter you password"/>
        <button>Submit</button>
    </form>
  )
}

export default LoginForm