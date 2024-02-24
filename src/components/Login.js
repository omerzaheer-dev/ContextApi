import React , { useState , useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        setUser({username,password})
    }
  return (
    <div className='w-[100vw]'>
        <div className='mx-auto mt-5 w-[40vw] h-auto'>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='username'/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <button onClick={handleSubmit}>OnSubmit</button>
        </div>
    </div>
  )
}

export default Login
