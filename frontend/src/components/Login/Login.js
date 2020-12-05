import React from 'react'
import classes from "./Login.module.css"

const Login = (props) => {
    return (
        <div className={classes.login_container}>
            <form>
                <div>
                <input type="text" placeholder="username"></input>
                </div>
                <div>
                <input type="password" placeholder="password"></input>
                </div>
                <div>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
