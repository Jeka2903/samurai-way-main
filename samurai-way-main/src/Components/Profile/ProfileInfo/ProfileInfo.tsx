import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://wallpapercave.com/wp/vHkIuG3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava +
                discription
            </div>
        </div>
    )
}

export default ProfileInfo;