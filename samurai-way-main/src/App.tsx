import React from 'react';
import './App.css';
// import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DialogType, PostType,MessageType} from "./index";

type PropsType = {
    posts:PostType[]
    messages:MessageType[]
    dialogs:DialogType[]
}

const App = (props:PropsType) => {



    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>

                    <Route path="/" render={() => <Profile posts={props.posts}/>} />
                    <Route path="/Dialogs/*" render={() => <Dialogs posts={props.dialogs} messages={props.messages}/>} />
                </Switch>
                <Profile />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
