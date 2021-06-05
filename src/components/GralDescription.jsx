import React from 'react'
import {motion, useViewportScroll, useMotionValue} from 'framer-motion'

import ProfilePic from '../assets/statics/profile-pic.jpg'
import LeftBoxCard from './LeftBoxCard'
import RightBoxCard from './RightBoxCard'
import CenterBoxDesc from './CenterBoxDesc'
import TextureToLeft from '../assets/statics/TextureToLeft.svg'
import TextureToRight from '../assets/statics/TextureToRight.svg'
import TextureToCenter from '../assets/statics/TextureToCenter.svg'

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
            <div className="description__container-titlebox"
            // style={{
            //     backgroundImage:`url(${TextureToCenter})`,
            // }}
            >
                <h2 className=''>Hi there, I'm Nelson Salazar M.</h2>
            </div>
            <CenterBoxDesc
            text={[
                ]}
            >
                <p>
                I am a professional in Visual Arts and a self-taught in 
                Software Development with emphasys in Frontend. 
                Currently I'm studyn a magister in Interactive Design at Universidad de 
                Buenos Aires. I am from Colombia, but I currently live in Argentina. 
                <br/> 
                So, I wanna change the game trought the aesthetic experience, enhancing 
                Companies and Startups to create their best products for their customers, 
                that's my reason and goal to work hard every day. So, if you are trying to 
                create an amazing new world, let me know <b>how can I help you?</b>
                </p>
            </CenterBoxDesc>

            {/* <div className="description__container-subtitle right">
                <h3>Curriculum Vitae</h3>
            </div> */}
            <RightBoxCard
            textureImg={TextureToLeft}
            direction='/cv'
            subtitle='Curriculum Vitae'
            text=''
            img={ProfilePic}
            >
                <p>
                Let me show you my work experience and how it got me here
                </p>
            </RightBoxCard>
            {/* <div className="description__container-subtitle left">
                <h3>Portfolio</h3>
            </div> */}
            <LeftBoxCard
                textureImg={TextureToRight}
                direction='/portfolio'
                subtitle="Portfolio"
                img={ProfilePic}
                text=""
            >
                <p>
                Let me show you the creative projects that I developed 
                to enhance companies, projects and teams in which I participated.
                </p>
            </LeftBoxCard>
            <RightBoxCard
            textureImg={TextureToLeft}
            direction='/cv'
            subtitle='Services'
            text=""
            img={ProfilePic}
            >
                <p>
                So, ¿Do you have an idea to change the game? Let me show you the way I can help you
                </p>
            </RightBoxCard>
        </section>
    )
}

export default GralDescription

