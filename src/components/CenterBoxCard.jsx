import { forwardRef, GridItem, Link, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import '../assets/styles/components/CenterBoxDesc.scss';

const MotionCardItem = motion(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
      );
      return <Link ref={ref} {...chakraProps} />;
    }),
  );
const CenterBoxCard = (props) => {
    const {img, text, direction} = props
    return (
        <MotionCardItem
        to={direction}
        as={RouteLink}
        >
            <GridItem
            gridColumn={{sm:'1/4'}}
            gridTemplateColumns={{sm:'repeat(3, 1fr)'}}
            margin={{sm:'0 1rem 2rem'}}
            borderRadius='20px'
            boxShadow='0px 5px 10px 3px rgba(27, 35, 55, 0.5)'
            backgroundImage={`url(${img})`}
            borderWidth='3px'
            borderStyle='solid'
            borderColor='brand.lgray2'
            >
            </GridItem>
            <GridItem className='description__boxcenter-textbox'>
                <Text>
                    {text}
                </Text>
            </GridItem>
        </MotionCardItem>
    )
}

export default CenterBoxCard
