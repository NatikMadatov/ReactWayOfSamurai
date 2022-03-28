import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';




const Dialogs = (props) => {
    
    let textArea = React.createRef();

    let button = () =>{
        let text = textArea.current.value;
        console.count(alert(text));
    }
                  
                  
   

    let dialogElement = props.dialog.map(d=><DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.messages.map(m=><Message message={m.message} id={m.id} />);
            

 return (

            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    {dialogElement}

                </div>
                <div className={s.messages}>
                    
                    {messagesElement}

                </div>
                
                
                
                
                <textarea ref={textArea}></textarea>

                <button onClick={button}>Add Message</button>
            </div>

            


    );
}





export default Dialogs;