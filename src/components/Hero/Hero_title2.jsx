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

const Hero_title2 = () => {
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
    hidden: { opacity: 0, right: -150 },
    show: {
      right: [-150, 0],
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <MotionH1
      as='h1'
      variants={containerTitle}
      color='brand.dgray4'
      initial='hidden'
      animate='show'
      letterSpacing=' 8px'
      fontSize={{ sm: '4.5rem', md: '5.5rem', xl: '6.5rem' }}
      margin='0'
      lineHeight={{ sm: '4rem', md: '5rem', xl: '6rem' }}
      alignSelf=' flex-end'
      zIndex='3'
      position='relative'
      className='hero-title__container'
    >
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        M
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        A
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        T
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        E
      </motion.span>
      <br />
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        R
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
        A
      </motion.span>
      <br />
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
        I
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        T
      </motion.span>
      <motion.span
        variants={itemTitle}
        style={{
          position: 'relative',
        }}
      >
        Y
      </motion.span>
    </MotionH1>
  );
};

export default Hero_title2;
