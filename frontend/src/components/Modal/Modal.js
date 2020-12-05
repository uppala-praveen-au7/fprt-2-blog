import React from 'react'
import classes from "./Modal.module.css"

const Modal = (props) => {
    const childHandler = (e) => {
        e.stopPropagation()
    }
    return (
        <div className={props.show ? classes.modal_display:classes.modal_hide} onClick={props.close()}>
            <div className={classes.modal_container} onClick={childHandler}>
                 {props.children}
        
            </div>
        </div>
    )
}

export default Modal
