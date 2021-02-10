import React from 'react'
import ReactDOM from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import ThemeContext from './context/ThemeContext'
import {
    fab, faGithub,
    faLinkedinIn,
    faBehance
    } from '@fortawesome/free-brands-svg-icons'
import {
    faAddressCard,
    faMoon,
    faPaperPlane,
    faPalette,
    faRocket,
    faSun
    } from '@fortawesome/free-solid-svg-icons'
import App from './router/App'

library.add(
    faGithub,
    faPaperPlane,
    faLinkedinIn,
    faBehance,
    faAddressCard,
    faRocket,
    faPalette,
    faMoon,
    faSun
    )


ReactDOM.render(
    <ThemeContext.Provider value='red'>
        <App />
    </ThemeContext.Provider>
    ,
    document.getElementById('app'))