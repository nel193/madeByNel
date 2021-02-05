import React from 'react'
import {motion, useViewportScroll, useMotionValue} from 'framer-motion'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import LeftBoxDesc from './LeftBoxDesc'
import RightBoxDesc from './RightBoxDesc'

import '../assets/styles/components/GralDescription.scss'

const GralDescription = () => {
    const scrollProgress= useViewportScroll()
    const x = useMotionValue();
    const containerImg= {
        hide: {opacity:0},
        show:{
            opacity:1,
            transition:{
                duration:1
            }
        }
    }
    const img={
        hide:{scale:0},
        show:{scale:1}
    }

    return (
        <section className='description__container'>
            <motion.div 
            className="description__container-contextbox"
            variants={containerImg}
            initial="hide"
            animate="show"
            >
                <picture>
                    <source/>
                    <motion.img 
                    className='profile-pic' 
                    src={ProfilePic} 
                    alt=""
                    variants={img}
                    />
                </picture>
            </motion.div>
            <div className="description__container-titlebox">
                <h2>Visual Artist Developer</h2>
            </div>
            <LeftBoxDesc
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!"
                img={ProfilePic}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!"
            />
            <div className="description__container-subtitle right">
                <h3>Otro subtitulo</h3>
            </div>
            <RightBoxDesc
            img={ProfilePic}
            />
            <div className="description__container-subtitle left">
                <h3>Otro subtitulo</h3>
            </div>
        </section>
    )
}

export default GralDescription

