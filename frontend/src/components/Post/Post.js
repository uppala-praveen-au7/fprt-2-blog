import React from 'react'
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post_container}>
            <h1 className={classes.post_title}>Title</h1>
            <div className={classes.post_content}>Content</div>
            <div className={classes.post_rem_details}>
                <p>Author</p>
                <p>Likes</p>
                <p>Comments</p>
                <p>Follow</p>
                <p>Created on</p>
            </div>
        </div>
    )
}

export default Post
