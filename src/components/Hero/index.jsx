import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/base/Buttons.scss';
import Blobs from './Blobs';
import Hero_title1 from './Hero_title1';
import Hero_title2 from './Hero_title2';
import Hero_title3 from './Hero_title3';
import Hero_title4 from './Hero_title4';
import Pixels3 from './Pixels3';

const Hero = () => {
  return (
    <Grid
      margin={{ sm: '6rem 0 0' }}
      height={{ sm: 'calc(100vh - 10rem)', md: 'calc(100vh - 15rem)' }}
      gridTemplateColumns={{
        sm: '1fr 260px 1fr',
        md: '1fr 400px 1fr',
        xl: '1fr 600px 200px 1fr',
      }}
      gridRowGap='10px'
      alignContent='center'
      justifyContent={{ sm: 'center' }}
      overflowX={{ sm: 'hidden' }}
    >
      <GridItem
        gridColumn='2 / 3'
        display='grid'
        gridTemplateColumns='repeat(5, 20%)'
        gridRowGap='10px'
        // height={{ md: '60vh' }}
      >
        <GridItem
          gridColumn='1/2'
          transform='rotate(-90deg)'
          transformOrigin='50% 50%'
          alignSelf='flex-end'
          height='5rem'
          color='brand.dark1'
          textShadow='-5px -2px brand.light4'
          zIndex='2'
          position='relative'
        >
          <Hero_title1 />
        </GridItem>
        <GridItem
          gridColumn=' 2/6'
          justifySelf=' center'
          textAlign={{ sm: 'right', md: 'initial' }}
          color='brand.base'
          textShadow='-5px 2px brand.dgray4'
          display='flex'
          alignSelf=' center'
          width=' 95%'
          height=' 15rem'
          position='relative'
          left={{ sm: '-40px', md: 'initial' }}
        >
          <Hero_title2 />
          <Blobs />
        </GridItem>
        <GridItem
          position='relative'
          gridColumn={{ sm: '1/5', md: '2/5' }}
          color='brand.base'
          textShadow='-5px 2px brand.dgray4'
          display='flex'
          justifyContent={{ sm: 'flex-end', md: 'initial' }}
          justifySelf=' center'
          width='95%'
          height=' 15rem'
        >
          <Hero_title3 />
          <Pixels3 />
        </GridItem>
        <GridItem
          gridColumn=' 5/6'
          transform='rotate(90deg)'
          transformOrigin=' 50% 50%'
          height=' 5rem'
          textShadow='5px 0 brand.light4'
          color='$brand.dark1'
          position='relative'
        >
          <Hero_title4 />
        </GridItem>
      </GridItem>
      <GridItem
        gridColumn={{ sm: '1/4', md: '1/3', xl: '3/4' }}
        display='flex'
        justifyContent={{ sm: 'flex-end' }}
        flexDirection={{ xl: 'column' }}
      >
        <Box
          margin='0 1rem 0 0'
          h={{ sm: '7rem', xl: '4rem' }}
        >
          <Link to='/about' className='btn cta primary'>
            <div className='cta__text'>
              ABOUT ME
            </div>
          </Link>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Hero;
