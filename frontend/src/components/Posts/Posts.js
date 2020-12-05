import React from 'react'
import Post from "../Post/Post"
import classes from "./Posts.module.css"

const Posts = (props) => {
    let arr = [1,2,3,4,5,6,7,8,9]
    return (
        <div className={classes.posts_container}>
            <ul className={classes.post_list}>
                {arr.map(val=><li key={val}><Post/></li>)}
            </ul>
        </div>
    )
}

export default Posts
