import React from 'react'
import PreNav from "../PreNav/PreNav"
import Posts from "../Posts/Posts"
import classes from "./LandingPage.module.css"

const LandingPage = (props) => {
    return (
        <div className={classes.landing_page}>
            <div className={classes.pre_nav}>
                <PreNav/>
            </div>
            <Posts/>
        </div>
    )
}

export default LandingPage
