import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
// import Message from './Message/Message';

type DialogsType = {
    id: string
    name: string
    countMessage?: number
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogsType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}


const dialogs = (props: DialogsType) => {

    let dialogs = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Roman"},
        {id: 3, name: "Irina"},
        {id: 4, name: "Anna"},
        {id: 5, name: "Svetlana"},
        {id: 6, name: "Alex"}
    ]

    let messages = [
        {id: 1, message: "Hello , How are you?"},
        {id: 2, message: "How are you friends?"},
        {id: 3, message: "What's news?"},
        {id: 4, message: "Hi!"},
        {id: 5, message: "Aloha!!!"},
        {id: 6, message: "Good morning!"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default dialogs;