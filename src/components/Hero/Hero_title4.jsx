import { forwardRef, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';

const MotionH1 = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <Text ref={ref} {...chakraProps} />;
  }),
);
const Hero_title4 = () => {
  const containerTitle = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.02,
        staggerChildren: 0.1,
      },
    },
  };
  const itemTitle = {
    hidden: { opacity: 0, right: -600 },
    show: {
      bottom: [-600, 0],
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionH1
      as='h1'
      className='hero-title__container'
      variants={containerTitle}
      color='brand.lgray4'
      initial='hidden'
      animate='show'
      letterSpacing=' 8px'
      fontSize={{ sm: '3.5rem', md: '4.5rem' }}
      margin='0'
      zIndex='5'
      position='absolute'
      left={{ sm: '-5px', md: '-100px', xl: '-150px' }}
      bottom={{ sm: '-15px', md: '-45px', xl: '-145px' }}
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
    </MotionH1>
  );
};
export default Hero_title4;
