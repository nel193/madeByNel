import { forwardRef, GridItem, Link, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

const MotionCardItem = motion(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
      );
      return <Link ref={ref} {...chakraProps} />;
    }),
  );

const RightBoxCard = (props) => {
    const {img, children, subtitle, aditional, timeFrame, direction, textureImg} = props
    
    const cardMotion = {
        scale:1.01,
        boxShadow:'initial'
    }
    return (
        <MotionCardItem 
        whileHover ={cardMotion} 
        to={direction}
        as={RouteLink}
        gridColumn={{sm:'1/4', md:'1/5', lg:'2/7'}}
        display='grid'
        gridTemplateColumns={{sm:'repeat(3, 1fr)'}}
        margin={{sm:'0 1rem 4rem 0'}}
        borderRadius={{sm:'0 20px 0 0', lg:'20px'}}
        boxShadow='0 5px 5px 5px rgba(27, 35, 55, 0.5)'
        textDecoration='none'
        alignSelf='center'
        justifySelf='center'
        borderTopWidth='3px'
        borderRightWidth='3px'
        borderBottomWidth='3px'
        borderLeftWidth={{lg:'3px'}}
        borderStyle='solid'
        borderColor='brand.lgray2'
        >
            <GridItem 
            gridColumn={{sm:'2/4'}}
            minHeight={{sm:'2rem'}}
            backgroundImage={`url(${textureImg})`}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            borderRadius='0 17px 0 0'
            padding={{sm:'.5rem', lg:'1.5rem'}}
            >
                <Text as='h3' marginBottom={{sm:'0'}}
                >
                    {subtitle}
                </Text>
                <Text as='h3' marginBottom={{sm:'0'}}>
                    {aditional}
                </Text>
                <Text as='h4' marginTop={{sm:'.5rem'}}>
                    {timeFrame}
                </Text>
            </GridItem>
            <GridItem
            gridColumn={{sm:'1/2'}}
            gridRow={{sm:'1/3'}}
            minHeight={{sm:'4rem'}}
            backgroundImage={`url(${img})`}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
            borderRadius={{lg:'17px 0 0 17px'}}
            borderRightWidth='3px'
            borderStyle='solid'
            borderColor='brand.lgray2'
            >
            </GridItem>
            <GridItem 
            gridColumn={{sm:'2/4'}}
            minHeight={{sm:'4rem'}}
            backgroundColor='brand.white'
            padding={{sm:'1rem', lg:'2rem'}}
            borderRadius={{lg:'0 0 20px 0'}}
            >
                {children}
            </GridItem>
        </MotionCardItem>
    )
}
export default RightBoxCard