import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import '../assets/styles/components/Navbar.scss'
const Navbar = (props) => { 
    return(
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-option'>
                    <FontAwesomeIcon icon={["fas", "address-card"]} size="lg"/>
                    &nbsp;
                    <Link to='/cv'>CV</Link>
                </li>
                <li className='navbar__list-option'>
                    <FontAwesomeIcon icon={["fas", "palette"]} size="lg" />
                     &nbsp;
                    <Link to='/portfolio'>PORTFOLIO</Link>
                </li>
                <li className='navbar__list-option'>
                    <FontAwesomeIcon icon={["fas", "rocket"]} size="lg" />
                    &nbsp;
                    <Link to='/services'>SERVICES</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar