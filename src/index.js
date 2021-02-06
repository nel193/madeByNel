import React from 'react'
import ReactDOM from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    fab, faGithub,
    faLinkedinIn,
    faBehance
    } from '@fortawesome/free-brands-svg-icons'
import {
    faPaperPlane,
    faAddressCard,
    faRocket,
    faPalette
    } from '@fortawesome/free-solid-svg-icons'
import App from './router/App'

library.add(
    faGithub,
    faPaperPlane,
    faLinkedinIn,
    faBehance,
    faAddressCard,
    faRocket,
    faPalette
    )
ReactDOM.render(<App />, document.getElementById('app'))