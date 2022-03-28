import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter,Route } from 'react-router-dom';



const App = (props) => {



  return ( 
  
  <BrowserRouter>

    <div className='app-wrapper'>


      <Header />

     <Navbar /> 
     

    <div className='app-wrapper-content'>

      

     
      
      <Route path="/dialogs" render= { ()=> <Dialogs dialog={props.state.dialog} messages={props.state.messages} />  } />
      <Route path="/profile" render= { ()=> <Profile posts={props.state.posts}/> } />
      
      <Route path="/news" render= { ()=> < News news={props.state.news}/>} />
      <Route path="/music" render= { ()=> <Music music={props.state.music} tracks={props.state.tracks}/>} />
      <Route path="/settings" render= { ()=> <Settings settings={props.state.settings} /> } />


      

      
     
     
     </div>


    </div> 
    
  </BrowserRouter>
  );
}



export default App;



