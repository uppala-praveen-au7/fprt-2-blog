import React from 'react'
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import classes from "./PreNavRight.module.css"

const PreNavRight = (props) => {
    return (
        <div className={classes.right_menu} >
            <Login/>
            <Signup/>
        </div>
    )
}

export default PreNavRight
