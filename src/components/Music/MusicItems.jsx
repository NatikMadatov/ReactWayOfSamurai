import React from 'react';
import s from './MusicItems.module.css';
import {NavLink} from 'react-router-dom';


const MusicItems = (props) =>{

    let path = "/Music/" + props.id
    return(

        <div>
            <NavLink to={path}>{props.name}</NavLink>





        </div>





    );
}

export default MusicItems;