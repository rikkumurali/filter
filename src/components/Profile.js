import React from 'react'
import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
  
  return <>
    <div style={{color: themeColor}} >
        <h1><b>PROFILE PAGE</b></h1>
        <h2><p> Name: {user.name} </p></h2>
        <h2><p> Age: {user.age} </p></h2>
        <h2><p> E-mail: {user.email} </p></h2>
    </div>
  </>
}

export default Profile;