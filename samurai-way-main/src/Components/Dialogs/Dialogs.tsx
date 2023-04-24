import React from 'react';
// import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

type DialogsPropsType = {
    dialog: DialogsType
}


// const DialogsItem = (props:DialogsPropsType) => {
//     let path:string = "/dialogs/"
// }
const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialogs/" + props.dialog.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.dialog.name}</NavLink>
    </div>
}

const Dialogs = () => {

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

    let dialogsElements = dialogs.map(d => <DialogItem dialog={d}/>);
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


export default Dialogs;