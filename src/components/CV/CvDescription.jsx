import { Box, forwardRef, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { isValidMotionProp, motion, useMotionValue, useViewportScroll } from 'framer-motion';
import React from 'react';
import ProfilePic from '../../assets/statics/profile-pic.jpg';
import CenterBoxDesc from '../CenterBoxDesc';
import LeftBoxCard from '../LeftBoxCard';
import LeftBoxDesc from '../LeftBoxDesc';
import RightBoxCard from '../RightBoxCard';
import RightBoxDesc from '../RightBoxDesc';

const MotionGridItem = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <GridItem ref={ref} {...chakraProps} />;
  }),
);

const MotionImage = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <Image ref={ref} {...chakraProps} />;
  }),
);

const CvDescription = () => {
  const scrollProgress = useViewportScroll();
  const x = useMotionValue();
  const containerImg = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const img = {
    hide: { scale: 0 },
    show: { scale: 1 },
  };

  return (
    <Grid 
    margin={{sm:'9rem 0 0 0'}}
    gridTemplateColumns={{
        sm:'repeat(3, 1fr)', 
        md:'1fr repeat(3, 200px) 1fr',
        lg:'1fr repeat(6, 150px) 1fr',
        "2xl": '1fr repeat(2, 225px) repeat(2, 125px) repeat(2, 225px) 1fr' 
    }}
    justifyContent='center'
    _before={{
        content:'""',
        backgroundColor:{md:'red'},
        gridColumn:{md:'2/5'},
        gridRow:{md:'1 / 5'}
    }}
    >
        <MotionGridItem
            variants={containerImg}
            initial='hide'
            animate='show'
            gridColumn={{
                sm:'2/4', 
                md:'3/6',
                lg:'4/9'
            }}
            borderTopWidth='3px'
            borderLeftWidth='3px'
            borderBottomWidth='3px'
            borderStyle='solid'
            borderColor='brand.lgray2'
            borderRadius={{sm:'100px 0 0 100px', lg:'150px 0 0 150px'}}
            margin={{sm:'0 0 2rem 0'}}
            minHeight={{sm: '7rem'}}
        >
            <MotionImage
                src={ProfilePic}
                alt='profile picture'
                variants={img}
                maxWidth={{sm:'8rem', md:'12rem', lg:'15rem'}}
                borderRadius='50%'
                borderWidth='3px'
                borderStyle='solid'
                borderColor='brand.lgray2'
            />
        </MotionGridItem>
        <Box 
        textAlign='center'
        gridColumn={{sm:'1/4', md:'1/7', lg:'1/9',}}
        margin={{sm:'2rem 0 1rem 0', md:'2.5rem 0 2rem 0'}}
        borderTopWidth='3px'
        borderBottomWidth='3px'
        borderStyle='solid'
        borderColor='brand.lgray2'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition='cover'
        padding={{sm:'1rem 0'}}
        display={{md:'flex'}}
        alignItems='center'
        justifyContent='center'
        >
            <Text as='h2'>
                Front-end Dev
            </Text>
            <Box
            width={{sm:'90%', md:'6.5rem', lg:'7.5rem'}}
            margin={{sm:'0 auto', md:'initial'}}
            borderWidth={{sm:'1px', md:'1px'}}
            transform={{md:'skewY(-35deg)'}}
            borderColor='rgba(0, 0, 0, 0)'
            >
                <hr style={{borderColor:'#9FB0B7', borderWidth:'inherit'}}/>
            </Box>
            <Text as='h2'>
                Product Designer
            </Text>
        </Box>
        <CenterBoxDesc
            subtitle='Objective'
        >
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!
            </Text>
        </CenterBoxDesc>
        <RightBoxDesc
            direction='/cv'
            subtitle='Personal information'
        >
            <UnorderedList>
            <ListItem>Nelson Salazar M</ListItem>
            <ListItem>Bachelor in Visual Arts</ListItem>
            <ListItem>Magister in Interactive Design in progress</ListItem>
            <ListItem>
                <a className='link' href='mailto:nelsonsalazarm93@gmail.com'>
                nelsonsalazarm93@gmail.com
                </a>
            </ListItem>
            <ListItem>From Colombia, currently living in Argentina, open to relocate.</ListItem>
            </UnorderedList>
        </RightBoxDesc>

        <Box
        display='flex'
        justifyContent={{sm:'center', lg:'initial'}}
        padding={{lg:'2rem 0 2rem 1rem'}}
        alignItems='center'
        margin={{sm:'0 0 2rem 0'}}
        gridColumn={{sm:'2/4', md:'3/6', lg:'5/9'}}
        borderRadius='20px 0 0 20px'
        height={{sm:'3rem', md:'4rem'}}
        borderTopWidth='3px'
        borderLeftWidth='3px'
        borderBottomWidth='3px'
        borderStyle='solid'
        borderColor='brand.lgray2'
        >
            <Text as='h2'>
                Laboral Experience
            </Text>
        </Box>
        <LeftBoxCard
            direction='/portfolio'
            subtitle={`Product Designer & Front-end Dev`}
            aditional='Ensalud S.A'
            timeFrame='09/2019 - 10/2020'
            // img={ProfilePic}
        >
            <Text>
            In charge of:
            </Text>
            <UnorderedList>
                <ListItem>Design of wireframes using Figma, Sketch, Adobe XD</ListItem>
                <ListItem>
                    Design and create the layout of the website and the
                    internal system of the company, using HTML, CSS, Javascript and Wordpress
                </ListItem>
                <ListItem>
                    Design of banners and promotional web ads integrating the Bodimovin library
                </ListItem>
                <ListItem>
                    Design digital pieces using Adobe Photoshop and Illustrator
                </ListItem>
                <ListItem>
                    Video edition and Motion graphics using Adobe Premiere and After Effects
                </ListItem>
            </UnorderedList>
            <Text
            fontWeight='800'
            >
                Checkout the projects was I developed at this experience
            </Text>
        </LeftBoxCard>
        <RightBoxCard
            direction='/portfolio'
            subtitle={`Designer & International Fellow`}
            aditional='CAII'
            timeFrame='03/2018 - 12/2018'
            // img={ProfilePic}
        >
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, impedit!
            </p>
        </RightBoxCard>
        <LeftBoxCard
            direction='/cv'
            subtitle='Image digital creator'
            aditional='Freelance'
            timeFrame='07/2013 - 09/2019'
            // img={ProfilePic}
        >

            <p>
            Hola curriculum
            </p>
        </LeftBoxCard>
        <Box
        display='flex'
        justifyContent={{sm:'center', lg:'flex-end'}}
        padding={{lg:'2rem 1rem 2rem 0'}}
        alignItems='center'
        margin={{sm:'0 0 2rem 0'}}
        gridColumn={{sm:'1/3', md:'1/4'}}
        borderRadius='0 20px 20px 0'
        height={{sm:'3rem', md:'4rem'}}
        borderTopWidth='3px'
        borderRightWidth='3px'
        borderBottomWidth='3px'
        borderStyle='solid'
        borderColor='brand.lgray2'
        >
            <Text as='h2'>
                Education
            </Text>
        </Box>
        <LeftBoxDesc
            direction='/cv'
            subtitle='Formal Education'
        >
            <UnorderedList>
            <ListItem>
                <Text
                fontWeight='800'
                >
                    Magister in Interactive Design, at Buenos Aires University.
                </Text>
                <Text>
                    2020 - Coursing
                </Text>
            </ListItem>
            <ListItem>
                <Text
                fontWeight='800'
                >
                    Bachelor in Visual Arts, Pontificia Javeriana University, Cali.
                </Text>
                <Text>
                    2011 - 2016
                </Text>
            </ListItem>
            </UnorderedList>
        </LeftBoxDesc>
        <RightBoxDesc
            direction='/cv'
            subtitle='Self-taugh Education'
            // img={ProfilePic}
        >
            <Text>
                Self-taugh in Web Development
            </Text>
            <UnorderedList>
                <ListItem>
                    <Text
                    fontWeight='800'
                    >
                        Platzi,
                    </Text>
                    <Text>
                        2019 - Until today
                    </Text>
                </ListItem>
                <ListItem>
                    <Text
                    fontWeight='800'
                    >
                        FreeCodeCamp,
                    </Text>
                    <Text>
                        2020 - Until today
                    </Text>
                </ListItem>
            </UnorderedList>
        </RightBoxDesc>
    </Grid>
  );
};

export default CvDescription;

