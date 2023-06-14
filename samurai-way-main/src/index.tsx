import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id:number
    message:string
    likesCount:number
}

export type DialogType  ={
    id:number
    name:string
}
export type MessageType = {
    id:number
    message:string
}



let posts: PostType[] = [
    {id:1,message:"Hello , How are you?",likesCount: 65}
    // [{id:2,message:"Hello",likesCount: 35}
]
let dialogs:DialogType[] = [
    {id: 1, name: "Anton"},
    {id: 2, name: "Roman"},
    {id: 3, name: "Irina"},
    {id: 4, name: "Anna"},
    {id: 5, name: "Svetlana"},
    {id: 6, name: "Alex"}
]

let messages:MessageType[] = [
    {id: 1, message: "Hello , How are you?"},
    {id: 2, message: "How are you friends?"},
    {id: 3, message: "What's news?"},
    {id: 4, message: "Hi!"},
    {id: 5, message: "Aloha!!!"},
    {id: 6, message: "Good morning!"}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);
