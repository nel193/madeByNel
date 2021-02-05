import React from 'react'
import {motion} from 'framer-motion'

const Hero_title4 = () => {
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
        hidden: { opacity:0, right: -600 },
        show: {
            right: [-600, 0],
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
            >
            M
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            E
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            E
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            T
            </motion.span>
            <motion.span
            variants={itemTitle}
            >
            S
            </motion.span>
        </motion.h1>
    )
}
export default Hero_title4