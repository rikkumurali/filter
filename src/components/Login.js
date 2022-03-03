import React from 'react'
import { useDispatch } from "react-redux";
import { login, logout } from '../features/user'

const Login = () => {
    const dispatch = useDispatch()
  return <>


    <div>
        <button className='btn' onClick={() => {
          dispatch(login({name: "hi", age: 30, email: "hi@gmail.com"}))}}>LOGIN</button>


          <button className='btn' onClick={() =>{ dispatch(logout({name: "hi", age: 30, email: "hi@gmail.com"}))}}>LOGOUT</button>
    </div>
  </>
}

export default Login;