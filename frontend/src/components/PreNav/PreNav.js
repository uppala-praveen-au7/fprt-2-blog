import React from 'react'
import Logo from "../Logo/Logo"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
const PreNav = (props) => {
    return (
        <nav>
            <Logo/>
            <Signup/>
            <Login/>
        </nav>
    )
}

export default PreNav
