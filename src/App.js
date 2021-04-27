
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Subscription from './pages/subscription';
import Contact from './pages/contact';
import Login from './pages/login';
import SignUp from './pages/signup';




function App() {
  return (
    <div className="App">
        <div className='sidebar'>
        </div>
       
        <div className='content'>
        <Router>
        <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/Subscription">
            <Subscription />
            </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          
        </Router>

    
         </div>
     
        
        </div>
       
        
        
  );
}

export default App;
