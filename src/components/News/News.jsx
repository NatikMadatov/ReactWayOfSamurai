import React from 'react';
import s from './News.module.css';
import NewsItems from './NewsItems';

const News = (props) =>{


    
    let newsElement = props.news.map(n=><NewsItems id={n.id} message={n.message} /> );

  

    return(

        <div className={s.wrapper}>
            <div className={s.new}>

                {newsElement}


            </div>
            

        </div>





    );
}

export default News;