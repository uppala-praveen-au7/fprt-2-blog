import React from 'react'
import Post from "../Post/Post"

const Posts = (props) => {
    let arr = [1,2,3,4,5,6,7,8,9]
    return (
        <div>
            <ul>
                {arr.map(val=><li key={val}><Post/></li>)}
            </ul>
        </div>
    )
}

export default Posts
