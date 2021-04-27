import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Subscription from './pages/subscription';
import Contact from './pages/contact';
import Login from "./pages/login";
import ProfessorHomePage from "./pages/professorHomePage"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//   <BrowserRouter>
//   <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/login" component={Login} />
//       <Route path="/subscription" component={Subscription} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/professorHomePage" component={ProfessorHomePage} />
//   </Switch>
// </BrowserRouter>,
// document.getElementById('root')

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
