import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

import Hero_title1 from './Hero_title1'
import Hero_title2 from './Hero_title2'
import Hero_title3 from './Hero_title3'
import Hero_title4 from './Hero_title4'

import Blobs from './Blobs'
import Pixels3 from './Pixels3'
import '../assets/styles/components/Hero.scss'
import '../assets/styles/base/Buttons.scss'

const Hero = () => {
    return(
        <div className='hero'>
            <div className='hero__content'>
                <div>
                    <Hero_title1 />
                </div>
                <div>
                    <Hero_title2 />
                    <Blobs/>
                </div>
                <div>
                    <Hero_title3 />
                    <Pixels3/>
                </div>
                <div>
                    <Hero_title4 />
                </div>
            </div>
            <div className='hero__buttons'>
                <div className='hero__buttons-left'>
                    <Link to='/about' className='btn cta primary' >
                        <div className='cta__text'>
                            ABOUT ME
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero