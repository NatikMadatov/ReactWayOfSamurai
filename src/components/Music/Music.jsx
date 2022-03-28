import React from 'react';
import s from './Music.module.css';
import MusicItems from './MusicItems';
import Tracks from './Tracks';

const Music = (props) =>{

   

  

    let musicElements = props.music.map(m=> <MusicItems name={m.name} id={m.id} />);
    let tracksElements = props.tracks.map(t=> <Tracks name={t.name} id={t.id} />);


    return(
        <div>

        <div className={s.music}>

           {musicElements}

        </div>

        <div className={s.tracks}>

            {tracksElements}

        </div>

        </div>
    );
}

export default Music;