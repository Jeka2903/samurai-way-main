import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";




const App = () => {
    return (
        <div className='app-wrapper'>
           <Header />
            <Navbar />
           <Profile />
        </div>
    );
}



export default App;
