import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Blops from './Blobs' 
import '../assets/styles/components/Hero.scss'
import '../assets/styles/base/Buttons.scss'

const Hero = () => {
    const colors = [
        ["#E5E6E6","#138EE8"],
        ["#95D6EA","#F5D1BC"],
        ["#F5D1BC","#F2A94A"],
        ["#F2A94A","#C4E5EE"],
    ]

    const [color, setColor] = useState(["#4DB8E5","#DAEFF1"])
    const handleColor = () => {
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        setColor(randomColor)
    }
    return(
        <div className='hero'>
            <div className='hero__content'>
                <div><h1>WHERE</h1></div>
                <div onClick={handleColor}>
                    <h1>MATE<br/>RIA<br/>LITY</h1>
                    <Blops firstColor={color[0]} secondColor={color[1]}/>
                </div>
                <div><h1>PIX<br/>ELS</h1></div>
                <div><h1>MEETS</h1></div>
            </div>
            <div className='hero__buttons'>
                <div className='hero__buttons-left'>
                    <Link className='btn primary' to='/'>
                        ABOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero