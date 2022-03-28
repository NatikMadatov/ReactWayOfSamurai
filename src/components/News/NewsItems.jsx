import react from 'react';
import s from './NewsItems.module.css';


const NewsItems = (props)=>{
    return(
        <div>
        <div className={s.newsitems}>{props.message}</div>

        </div>




    );
}


export default NewsItems;