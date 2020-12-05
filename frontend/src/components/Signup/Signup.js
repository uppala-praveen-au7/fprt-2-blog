import React from 'react'
import classes from "./Signup.module.css"

const Signup = (props) => {
    return (
        <div className={classes.signup_container}>
            <form>
                <div>
                <input type="text" placeholder="username"/>
                </div>
                <div>
                <input type="email" placeholder="email"/>
                </div>
                <div>
                <input type="password" placeholder="password"/>
                </div>
                <div>
                <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
