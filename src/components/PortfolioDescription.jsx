import React from 'react'
import {motion, useViewportScroll, useMotionValue} from 'framer-motion'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import LeftBoxCard from './LeftBoxCard'
import RightBoxCard from './RightBoxCard'
import CenterBoxDesc from './CenterBoxDesc'
import CenterBoxCard from './CenterBoxCard'




import '../assets/styles/components/GralDescription.scss'

const PortfolioDescription = () => {
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
            className="description__container-contextbox titleSection"
            variants={containerImg}
            initial="hide"
            animate="show"
            >
                <h1>PORTFOLIO</h1>
            </motion.div>
            <p>
            This portfolio was been created for your enjoyment, so, you can explore this trought two
            different ways, searching the specific knowledge or skill that are you interested. Or 
            exploring project to project.
            </p>
            <div className="description__container-titlebox">
                <h2>Front-end Development</h2>
            </div>
            <div className="description__container-subtitle right">
                <h3>Profesional Projects</h3>
            </div>
            <CenterBoxCard
            subtitle='ENSALUD S.A.'
            >
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-subtitle left">
                <h3>Educational Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-titlebox">
                <h2>Product Design</h2>
            </div>
            <div className="description__container-subtitle right">
                <h3>Profesional Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-titlebox">
                <h2>Audiovisual</h2>
            </div>
            <div className="description__container-subtitle right">
                <h3>Profesional Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-titlebox">
                <h2>Visual Arts</h2>
            </div>
            <div className="description__container-subtitle right">
                <h3>Profesional Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-titlebox">
                <h2>Photography</h2>
            </div>
            <div className="description__container-subtitle right">
                <h3>Profesional Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
            <div className="description__container-subtitle left">
                <h3>Pesonal Projects</h3>
            </div>
            <CenterBoxCard>
                <p>
                This portfolio was been created for your enjoyment, so, you can explore this trought two
                different ways, searching the specific knowledge or skill that are you interested. Or 
                exploring project to project.
                </p>
            </CenterBoxCard>
        </section>
    )
}

export default PortfolioDescription

