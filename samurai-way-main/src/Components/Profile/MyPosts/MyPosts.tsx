import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostType = {
    id:number
    message:string
    likesCount:number
}

const MyPosts = () => {

    let posts: PostType[] = [
        {id:1,message:"Hello , How are you?",likesCount: 65}
            // [{id:2,message:"Hello",likesCount: 35}
    ]
    let postsElements =
        posts.map((p, i) => <Post message={p.message} key={i} likeCount={p.likesCount}/>);


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}


export default MyPosts;