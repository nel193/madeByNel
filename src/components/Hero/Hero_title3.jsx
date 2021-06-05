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

const Hero_title3 = () => {

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
    hidden: { opacity: 0, left: -1500 },
    show: {
      left: [-1500, 0],
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
      color='brand.dgray4'
      initial='hide'
      animate='show'
      letterSpacing=' 8px'
      fontSize={{ sm: '4.5rem', md: '5.5rem', xl: '6.5rem' }}
      margin='0'
      lineHeight={{ sm: '4rem', md: '5rem' }}
      zIndex='4'
      position='relative'
    >
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        P
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        I
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        X
      </motion.span>
      <br />
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        E
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        L
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        S
      </motion.span>
    </MotionH1>
  );
};
export default Hero_title3;
