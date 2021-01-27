import React from 'react';
import {Link} from 'react-router-dom'

import '../assets/styles/components/Navbar.scss'
const Navbar = (props) => { 
    return(
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li>
                    <Link to='/cv'>CV</Link>
                </li>
                <li>
                    <Link to='/portfolio'>PORTFOLIO</Link>
                </li>
                <li>
                    BURGUER
                </li>
            </ul>
        </nav>
    )
}

export default Navbar