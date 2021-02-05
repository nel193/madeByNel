import React from 'react'
import {motion} from 'framer-motion'

const Hero_title3 = () => {
    
    const containerTitle={
        hidden: { opacity: 0},
        show: {
            opacity: 1,
            transition: {
                duration:.5,
                delayChildren:.02,
                staggerChildren: .1
            }
        }
    }
    const itemTitle = {
        hidden: { opacity:0, left: -1500 },
        show: {
            left: [-1500, 0],
            opacity:1,
            transition:{
                duration:.5,
            }
        }
    }

    return (
        <motion.h1
        variants={containerTitle}
        initial="hide"
        animate="show"
        >
            <motion.span
            variants={itemTitle}
            >
            P
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            I
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            X
            </motion.span>
            <br/>
            <motion.span
            variants={itemTitle}
            >
            E
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            L
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            S
            </motion.span>
        </motion.h1>
    )
}
export default Hero_title3