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

const Dialogs = (props:any) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem dialog={d}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

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