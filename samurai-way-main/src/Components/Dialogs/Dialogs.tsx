import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from "./Message/Message";

type DialogsType = {
    id: number
    name: string
    countMessage?: number
}


const Dialogs = (props: DialogsType) => {

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


export default Dialogs;