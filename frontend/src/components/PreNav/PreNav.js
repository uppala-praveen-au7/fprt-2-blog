import React from 'react'
import Logo from "../Logo/Logo"
import PreNavRight from "../PreNavRight/PreNavRight"
import classes from "./PreNav.module.css"
const PreNav = (props) => {
    return (
        <nav className={classes.nav} >
            <Logo/>
            <PreNavRight/>
        </nav>
    )
}

export default PreNav
