import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let textarea = React.createRef();

  let button = () =>{
    let text = textarea.current.value;

    alert(text);
  }


    let postElements =props.posts.map(p => <Post message={p.message} id={p.id} likeCount={p.likeCount} /> );

    return( 
    
    <div>
       
        
           <div
           >My posts
           
           </div>
              <div>
                <textarea ref={textarea}></textarea>
                <button onClick={button}>Add post</button>
                  </div>
                 <div className={s.posts}>
                   
                   {postElements}
  
                    </div>
                    </div>
  


        
    );
}

export default MyPosts;