import React from 'react'
import logo from "./HoneyB.jpg"

import classes from "./Logo.module.css"
const Logo = (props) => {
    return (
        <div className={classes.logo_container} >
            <img className={classes.logo} src={logo} alt="Logo"/>
        </div>
    )
}

export default Logo
