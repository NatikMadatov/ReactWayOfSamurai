import React from 'react';
import s from './Settings.module.css';



const SettingsItems = (props) =>{
    return(
            <div className={s.settings}>{props.message}</div>

    );
}

export default SettingsItems;