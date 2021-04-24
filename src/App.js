
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Subscription from './pages/subscription';






function App() {
  return (
    <div className="App">
        <div className='sidebar'>
        </div>
        <div className='box'>
        <div className='content'>
        <Router>
        <Navbar />
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Subscription">
            <Subscription />
          </Route>
        </Router>

    
         </div>
        </div>
        
        </div>
       
        
        
  );
}

export default App;
