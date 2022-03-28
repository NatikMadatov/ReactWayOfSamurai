import React from 'react';
import s from './Tracks.module.css';





const Tracks = (props) =>{
    return(
        <div>
            <div className={s.tracks}>{props.name}</div>
        </div>
    )
}


export default Tracks;
