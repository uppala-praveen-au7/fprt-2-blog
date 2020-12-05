import React from 'react'
import classes from "./Modal.module.css"

const Modal = (props) => {
    return (
        <div className={props.show ? classes.modal_display:classes.modal_hide} onClick={props.close}>
            <div className={classes.modal_container}>
                 {props.children}
        
            </div>
        </div>
    )
}

export default Modal
