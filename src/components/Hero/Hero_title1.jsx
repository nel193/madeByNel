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

const Hero_title1 = () => {
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
    hidden: { opacity: 0, right: -1500 },
    show: {
      right: [-1500, 0],
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
      initial='hide'
      animate='show'
      fontSize={{ sm: '3.5rem', md: '4.5rem', xl: '5.5rem' }}
      letterSpacing=' 8px'
      margin='0'
      position='absolute'
      left={{ sm: '-120px', md: '-110px', xl: '-60px' }}
      bottom={{ sm: '-15px', md: '-30px', xl: '-60px' }}
    >
      <motion.span
        style={{
          position: 'relative',
        }}
        variants={itemTitle}
      >
        W
      </motion.span>
      <motion.span
        style={{
          position: 'relative',
        }}
        variants={itemTitle}
      >
        H
      </motion.span>
      <motion.span
        style={{
          position: 'relative',
        }}
        variants={itemTitle}
      >
        E
      </motion.span>
      <motion.span
        style={{
          position: 'relative',
        }}
        variants={itemTitle}
      >
        R
      </motion.span>
      <motion.span
        style={{
          position: 'relative',
        }}
        variants={itemTitle}
      >
        E
      </motion.span>
    </MotionH1>
  );
};

export default Hero_title1;
