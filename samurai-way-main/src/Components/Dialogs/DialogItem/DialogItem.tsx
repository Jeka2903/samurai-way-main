import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
// import Message from './Message/Message';

type DialogsItemType = {
    id: number
    name: string
    countMessage?: number
}

// type MessageType = {
//     message: string
// }

const DialogItem = (props: DialogsItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}



export default DialogItem;