import React,{useState} from 'react'
// import Login from "../Login/Login"
// import Signup from "../Signup/Signup"
import classes from "./PreNavRight.module.css"
import {Link} from "react-router-dom"
import Modal from "../Modal/Modal"
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const PreNavRight = (props) => {
    const [modal,setModal] = useState(false)
    const modalHandler = () =>{
        setModal(prev=>!prev)
    }
    return (
        <div className={classes.right_menu} >
            <>
            <Link to="/login" className={classes.link} onClick={modalHandler}>Login
                
                </Link>
                <Modal show={modal} close={modalHandler}>
                        <Login/>
                    </Modal>
            </>
            <>
            <Link to="#" className={classes.link} onClick={modalHandler}>Signup
            </Link>
            <Modal show={modal} close={modalHandler}>
                    <Signup/>
                </Modal>
            </>
        </div>
    )
}

export default PreNavRight
