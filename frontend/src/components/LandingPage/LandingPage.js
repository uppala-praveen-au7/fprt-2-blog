import React from 'react'
import PreNav from "../PreNav/PreNav"
import Posts from "../Posts/Posts"
import classes from "./LandingPage.module.css"
import Footer from '../Footer/Footer'

const LandingPage = (props) => {
    return (
        <div className={classes.landing_page}>
            <div className={classes.pre_nav}>
                <PreNav/>
            </div>
            <Posts/>
            <div className={classes.foot}>
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage
