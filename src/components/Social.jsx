import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import '../assets/styles/components/Social.scss'

const Social = () => {
    return (
        <section className='social__container'>
            <span className='icons__container'>
                <span className="icons__container-icon">
                    <a href='/'>
                        <FontAwesomeIcon style={{color:"#fff"}} icon={["fas", "paper-plane"]} size="2x" />
                    </a>
                </span>
                <span className="icons__container-icon">
                    <a href='/'>
                        <FontAwesomeIcon style={{color:"#fff"}} icon={["fab", "github"]} size="2x"/>
                    </a>
                </span>
                <span className="icons__container-icon">
                    <a href='/'>
                        <FontAwesomeIcon style={{color:"#fff"}} icon={["fab", "linkedin-in"]} size="2x"/>
                    </a>
                </span>
                <span className="icons__container-icon">
                    <a href='/'>
                        <FontAwesomeIcon style={{color:"#fff"}} icon={["fab", "behance"]} size="2x"/>
                    </a>
                </span>
            </span>
        </section>
    )
}

export default Social