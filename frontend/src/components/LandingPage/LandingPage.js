import React,{Fragment} from 'react'
import PreNav from "../PreNav/PreNav"
import Posts from "../Posts/Posts"

const LandingPage = (props) => {
    return (
        <Fragment>
            <PreNav/>
            <Posts/>
        </Fragment>
    )
}

export default LandingPage
