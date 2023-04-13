import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsType = {
    id:string
    name:string
    countMessage?:number
}

type MessageType = {
    message:string
}



const DialogItem =(props:DialogsType) => {
    let path = "/dialogs/" + props.id;
    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
</div>
}
const Message = (props:MessageType) =>{
  return  <div className={s.dialog}>{props.message}</div>
}



const Dialogs = (props:DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anton" id="1" />
                <DialogItem name="Roman" id="2" />
                <DialogItem name="Irina" id="3" />
                <DialogItem name="Anna" id="4" />
                <DialogItem name="Svetlana" id="5" />
                <DialogItem name="Alex" id="6" />
            </div>
            <div className={s.messages}>
                <Message message={"Hello , How are you?"}/>
                <Message message={"How is your day?"}/>
                <Message message={"I wish good day for you!!!!"}/>
                <Message message={"I wish good day for you!!!!"}/>
                <Message message={"I wish good day for you!!!!"}/>
            </div>
        </div>
    )
}


export default Dialogs;