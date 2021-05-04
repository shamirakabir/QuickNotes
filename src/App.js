import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Subscription from './pages/subscription';
import Contact from './pages/contact';
import Login from './pages/login';
import SignUp from './pages/signup';
import Type from './pages/type';
import ProfessorHomePage from './pages/professorHomePage';
import Sidebar from './components/sidebar';
import StudentHomePage from './pages/studentHomePage';

function App() {
  const [isProfessor, setisProfessor] = useState(false)
  let sidebarClassName = 'sidebar';
  if (isProfessor){
    sidebarClassName+=' sidebarProfessor';
  }


  return (
    <div className="App">
     <Sidebar isProfessor={isProfessor}/>
      {/* <div className={sidebarClassName}> </div> */}
        <div className='content'>
          
          
        <Router>
        <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Subscription">
            <Subscription />
            </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login setloginProfessor={setisProfessor}/>
          </Route>
          <Route path="/signup">
            <SignUp setloginProfessor={setisProfessor}/>
          </Route>
          <Route path="/type">
            <Type />
          </Route>
          <Route path="/professorHomepage">
            <ProfessorHomePage />
          </Route>
          <Route path="/studentHomepage">
            <StudentHomePage />
          </Route>
        </Router>

        
         
        </div>
        
        
        </div>
       
        
        
  );
}

export default App;
