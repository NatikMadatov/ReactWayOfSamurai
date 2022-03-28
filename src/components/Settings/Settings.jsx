import React from 'react';

import SettingsItems from './SettingsItems';


const Settings = (props) =>{

    

    let settingsElement = props.settings.map(s=> <SettingsItems id={s.id} message={s.message} />);


    return(
        <div>

        <div>
           
                {settingsElement}
            
        </div>


        </div>



    );
}

export default Settings;