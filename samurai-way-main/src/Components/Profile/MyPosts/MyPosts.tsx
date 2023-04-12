import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
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
                    <Post message='Hi , how are you?' likeCounter='35'/>
                    <Post message='How is life?' likeCounter='43'/>
                    <Post message='Hello evryone!!!' likeCounter='85'/>
                </div>
        </div>
)
}

export default MyPosts;