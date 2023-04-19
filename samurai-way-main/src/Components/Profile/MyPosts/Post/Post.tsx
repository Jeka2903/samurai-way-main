import React from 'react';
import s from './Post.module.css';


const Post = (props:any) => {


    return (
        <div className={s.item}>
            <img src='https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-zombie-face-vector-halloween-monster-square-avatar-175918631.jpg'/>
            { props.message }
        <div>
            <span>like</span> { props.likeCounter }
        </div>
        </div>
    )
}

export default Post;