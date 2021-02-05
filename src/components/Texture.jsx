import React from 'react'
import {motion} from 'framer-motion'

import '../assets/styles/components/Texture.scss'
const shapes = {
    one:{
        d:"M0,150c15.41-37,32.11-60.06,49.9-60,21,.07,30.39,32.25,49.36,30,24.13-2.86,26.5-57,50.74-60,19.85-2.42,30.07,32.48,49.82,30,23.39-2.94,24.55-53.87,50.18-60,12.45-3,28.68,5.06,50,30V0H0Z"
    },
    two:{
        d:"M300,150c-15.41-37-32.11-60.06-49.9-60-21,.07-30.39,32.25-49.36,30-24.13-2.86-26.5-57-50.74-60-19.85-2.42-30.07,32.48-49.82,30C76.79,87.06,75.63,36.13,50,30,37.55,27,21.32,35,0,60V0H300Z"
    }
}
const Texture = () => {
    return(
        <div className="texture__container">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 300 150">
                <path 
                    d="M0,150c15.41-37,32.11-60.06,49.9-60,21,.07,30.39,32.25,49.36,30,24.13-2.86,26.5-57,50.74-60,19.85-2.42,30.07,32.48,49.82,30,23.39-2.94,24.55-53.87,50.18-60,12.45-3,28.68,5.06,50,30V0H0Z"
                    className="cls-1" 
                    fill="url(#linear-gradient)"
                />
                <defs>
                <linearGradient 
                    id="linear-gradient" 
                    x1="150" 
                    y1="-10" 
                    x2="150" 
                    y2="120" 
                    gradientUnits="userSpaceOnUse"
                >
                    {/* y1="5.19" */}
                    {/* 147.32 */}
                    <stop 
                        offset="0.15" 
                        stopColor="#2a384c"   
                    />
                    <motion.stop offset="0.64" 
                        initial={{stopColor:"#2A384C"}} 
                        animate={{stopColor:"#1B2237"}}
                        transition={{

                            repeat: Infinity, 
                            repeatType:'reverse', 
                            duration: 3, 
                            ease: "easeIn"
                        }}
                    />
                </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Texture