import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {useIntersection} from 'react-use'
import '../assets/styles/components/Header.scss'
import ThemeContext from '../context/ThemeContext'
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
            <div className='header__switchmode'>
                <Switchmode/>
            </div>
        </header>
)

export default Header