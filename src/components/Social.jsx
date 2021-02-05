import React from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/components/Social.scss'

const Social = () => {
    return (
        <section className='social__container'>
            <div>
                <Link to ='/'>
                    <img src="" alt="" />
                </Link>
            </div>
            <div>
                <Link to ='/'>
                    <img src="" alt="" />
                </Link>
            </div>
            <div>
                <Link to ='/'>
                    <img src="" alt="" />
                </Link>
            </div>
        </section>
    )
}

export default Social