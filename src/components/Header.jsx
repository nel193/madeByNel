import React from 'react';
import {Link} from 'react-router-dom'
import {useIntersection} from 'react-use'
import '../assets/styles/components/Header.scss'
import Switchmode from './Switchmode'
import logo from '../assets/statics/logo.png'

const Header = () => (
        <header className='header'>
            <picture className='header__pic'>
                <source/>
                <Link to='/'>
                    <img className='header__pic-logo' src={logo} alt=""/>
                </Link>
            </picture>
            <div>
                <Switchmode/>
            </div>
        </header>
)

export default Header