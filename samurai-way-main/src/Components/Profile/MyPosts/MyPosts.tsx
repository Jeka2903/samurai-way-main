import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>


            <div className={s.posts}>
                <Post message='Hi , how are you?' likeCounter='35'/>
                <Post message='How is life?' likeCounter='43'/>
                <Post message='Hello evryone!!!' likeCounter='85'/>
            </div>
        </div>
    )
}

export default MyPosts;