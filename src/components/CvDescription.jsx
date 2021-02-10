import React from 'react'
import {motion, useViewportScroll, useMotionValue} from 'framer-motion'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import LeftBoxCard from './LeftBoxCard'
import RightBoxCard from './RightBoxCard'
import CenterBoxDesc from './CenterBoxDesc'




import '../assets/styles/components/GralDescription.scss'

const CvDescription = () => {
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
                <h2>Visual Artist Developer / Product Designer</h2>
            </div>
            <CenterBoxDesc 
            
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!'
            />

            <div className="description__container-subtitle right">
                <h3>Personal Information</h3>
            </div>
            <RightBoxCard
            direction='/cv'
            subtitle='Curriculum Vitae'
            text='Hola curriculum'
            img={ProfilePic}
            />
            <div className="description__container-subtitle left">
                <h3>Laboral Experience</h3>
            </div>
            <LeftBoxCard
                direction='/portfolio'
                subtitle="Portfolio"
                img={ProfilePic}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!"
            />
            <div className="description__container-subtitle right">
                <h3>Personal Information</h3>
            </div>
            <RightBoxCard
            direction='/cv'
            subtitle='Curriculum Vitae'
            text='Hola curriculum'
            img={ProfilePic}
            />
        </section>
    )
}

export default CvDescription

