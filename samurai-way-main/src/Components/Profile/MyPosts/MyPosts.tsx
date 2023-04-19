import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props:any) => {


    let postData = [
        { id: 1, message: 'Hi , how are you?' likeCounter:35},
        { id: 2, message: 'How is life?' likeCounter:43},
        { id: 3, message: 'Hello evryone!!!' likeCounter:85},
       ]

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>

                </div>


                <div className={s.posts}>
                    <Post message ={postData[0].message} likesCount={postData[0].likeCounter}/>
                    <Post message ={postData[0].message} likesCount={postData[1].likeCounter}/>
                    <Post message ={postData[0].message} likesCount={postData[2].likeCounter}/>
                    <Post message='Hello evryone!!!' likeCounter='85'/>
                </div>
        </div>
)
}

export default MyPosts;