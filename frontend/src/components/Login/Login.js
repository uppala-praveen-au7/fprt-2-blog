import React from 'react'
import classes from "./Login.module.css"

const Login = (props) => {
    return (
        <div className={classes.login_container}>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
