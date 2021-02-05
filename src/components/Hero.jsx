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
    // const colors = [
    //     ["#E5E6E6","#138EE8"],
    //     ["#95D6EA","#F5D1BC"],
    //     ["#F5D1BC","#F2A94A"],
    //     ["#F2A94A","#C4E5EE"],
    // ]
    // const [color, setColor] = useState(["#F5D1BC","#E5E6E6"])
    // const handleColor = () => {
    //     const randomColor = colors[Math.floor(Math.random()*colors.length)]
    //     setColor(randomColor)
    // }



    return(
        <div className='hero'>
            <div className='hero__content'>
                <div>
                    <Hero_title1 />
                </div>
                <div >
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
                    <Link to='/about' className='btn primary' >
                        <div className='btn__text'>
                            ABOUT
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero