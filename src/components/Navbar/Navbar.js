// eslint-disable-next-line 
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import'./style2.css';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

class Navbar extends Component {
    state={ clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        const isProfessor = this.props.isProfessor
        let navbarClassname = 'NavbarItems';
        if (!isProfessor){
            return(
                <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                <a href="/" class="logo">
                    <img src={logo} alt="Logo"/>
                </a>

                <nav id="navbar" class="navbar">
                <ul>
                <li><a class="nav-link scrollto " href="/">Home</a></li>
                <li><a class="nav-link scrollto" href="/login">Login</a></li>
                <li><a class="nav-link scrollto" href="/">Product</a></li>
                <li><a class="nav-link scrollto " href="/subscription">Services</a></li>
                <li><a class="nav-link scrollto" href="/contact">Contact</a></li>
                <li><a class="getstarted scrollto" href="/type">Get Started</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

                </div>
                </header> 
                
            )
        }
        else{
            return(
                <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">
                <a href="/" class="logo">
                    <img src={logo} alt="Logo"/>
                </a>
                </div>
                </header> 
            )
        }
        
    }


}

export default Navbar


