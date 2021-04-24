// eslint-disable-next-line 
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import'./Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

class Navbar extends Component {
    state={ clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
               
                <ul className={this.state.clicked ? 'nav-menu activate' : 'nav-menu'}>
                    { MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                                
                            </li>
                        )
                    }
                    
                    ) }
                    
                </ul>
                <img className="logo" src={logo} alt="Logo" />
            </nav>
            
        )

        
    }


}

export default Navbar


