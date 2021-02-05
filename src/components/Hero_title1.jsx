import React from 'react'
import {motion} from 'framer-motion'

const Hero_title1 = () => {
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
        hidden: { opacity:0, right: -1500 },
        show: {
            right: [-1500, 0],
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
            W
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            H
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            E
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            R
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            E
            </motion.span>
        </motion.h1>
    )
}

export default Hero_title1
