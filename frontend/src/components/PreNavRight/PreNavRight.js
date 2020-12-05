import React,{ useState} from 'react'
import classes from "./PreNavRight.module.css"
import {Link} from "react-router-dom"
import Modal from "../Modal/Modal"
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const PreNavRight = (props) => {
    const [loginmodal,setLoginModal] = useState(false)
    const [signupmodal,setSignupModal] = useState(false)
    const loginmodalHandler = () =>{
        setLoginModal(prev=>!prev)
    }
    const signupmodalHandler = () => {
        setSignupModal(prev=>!prev)
    }
    return (
        <div className={classes.right_menu} >
            <span onClick={loginmodalHandler}>
            <Link to="#" className={classes.link} >Login
                
                </Link>
                <Modal show={loginmodal} close={loginmodalHandler}>
                        <Login/>
                    </Modal>
            </span>
            <span onClick={signupmodalHandler}>
            <Link to="#" className={classes.link}>Signup
            </Link>
            <Modal show={signupmodal} close={signupmodalHandler}> 
                    <Signup/>
                </Modal>
            </span>
        </div>
    )
}

export default PreNavRight
