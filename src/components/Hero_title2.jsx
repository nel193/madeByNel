import React from 'react'
import {motion} from "framer-motion"

const Hero_title2 = () => {
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
        hidden: { opacity:0, right: -150 },
        show: {
            right: [-150, 0],
            opacity:1,
            transition:{
                duration:.5,
            }
        }
    }
    return (
        <motion.h1
        variants={containerTitle}
        initial="hidden"
        animate="show"
        >
            <motion.span
            variants={itemTitle}
            >M</motion.span>
            <motion.span
            variants={itemTitle}
            >A</motion.span>
            <motion.span
            variants={itemTitle}
            >T</motion.span>
            <motion.span
            variants={itemTitle}
            >E</motion.span>
            <br/>
            <motion.span
            variants={itemTitle}
            >R</motion.span>
            <motion.span
            variants={itemTitle}
            >I</motion.span>
            <motion.span
            variants={itemTitle}
            >A</motion.span>
            <br/>
            <motion.span
            variants={itemTitle}
            >L</motion.span>
            <motion.span
            variants={itemTitle}
            >I</motion.span>
            <motion.span
            variants={itemTitle}
            >T</motion.span>
            <motion.span
            variants={itemTitle}
            >Y</motion.span>
        </motion.h1>
    )
}

export default Hero_title2 