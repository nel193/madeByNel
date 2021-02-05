import React from 'react'
import { motion } from 'framer-motion'

import '../assets/styles/components/Blobs.scss'

const shapes = {
    one: {
      d:
        "M300.007 0.0616234C397.343 -1.47215 495.012 25.4701 559.635 98.275C628.47 175.825 675.232 285.425 639.799 382.877C607.01 473.058 490.608 479.999 405.048 523.44C315.133 569.093 234.753 672.442 140.597 636.339C43.8518 599.242 26.6436 473.827 9.26897 371.68C-6.52409 278.832 -7.59317 180.477 50.4405 106.299C109.054 31.38 204.896 1.56033 300.007 0.0616234Z"
    },
    two: {
      d:
        "M344.843 1.10919C437.987 -8.98476 525.417 51.1543 580.507 126.936C632.718 198.757 648.2 293.677 618.31 377.288C591.809 451.423 510.387 477.478 441.542 515.669C363.531 558.945 290.112 630.861 204.14 607.043C104.401 579.41 9.61143 496.564 0.472325 393.472C-8.08449 296.948 101.644 244.732 165.565 171.902C222.847 106.638 258.512 10.4648 344.843 1.10919Z"
    }
  };

const Blobs = () => {
    
    return(
        <motion.span 
        className='blob__container'
        animate={{scale:[0, 1]}}
        >
            <svg
                width="334"
                height="312"
                viewBox="0 0 650 650"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <motion.path
                initial={shapes.one}
                animate={shapes.two}
                transition={{ repeat: Infinity, repeatType:'reverse', duration: 3, ease: "easeInOut" }}
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="url(#paint0_linear)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="57.3913"
                    y1="214.187"
                    x2="489.792"
                    y2="330.049"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC806" />
                    <stop offset="1" stopColor="#F5D1BC" />
                </linearGradient>
                </defs>
            </svg>   
        </motion.span>
    )
}
export default Blobs
