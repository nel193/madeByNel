import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import '../assets/styles/components/LeftBoxDesc.scss'
const LeftBoxDesc = (props) => {
    const {img, imgName, text, subtitle, textureImg, children} = props
    return (
        <Grid         
        gridColumn={{sm:'1/4', md:'2/6', lg:'3/8'}}
        gridTemplateColumns={{sm:'repeat(3, 1fr)'}}
        margin={{sm:'0 0 4rem 1rem'}}
        borderRadius={{sm: '20px 0 0 0', lg: '20px'}}
        boxShadow='0 5px 5px 5px rgba(27, 35, 55, 0.5)'
        borderTopWidth='3px'
        borderLeftWidth='3px'
        borderBottomWidth='3px'
        borderRightWidth={{lg:'3px'}}
        borderStyle='solid'
        borderColor='brand.lgray2'
        >
            <GridItem 
            gridColumn={{sm:'1/3'}}
            minHeight={{sm:'2rem'}}
            backgroundImage={`url(${textureImg})`}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            borderRadius='17px 0 0'
            padding={{sm:'.5rem', lg:"1.5rem"}}
            textAlign='end'
            >
                <Text as='h3' marginBottom={{sm:'0'}}>
                    {subtitle}
                </Text>
            </GridItem>
            <GridItem 
            gridColumn={{sm:'3/4'}}
            gridRow={{sm:'1/3'}}
            minHeight={{sm:'4rem'}}
            backgroundImage={`url(${img})`}
            alt={imgName}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundPosition='center'
            borderRadius={{lg:'0 17px  17px 0'}}
            borderLeftWidth='3px'
            borderStyle='solid'
            borderColor='brand.lgray2'
            >
            </GridItem>
            <GridItem
            gridColumn={{sm:'1/3'}}
            minHeight={{sm:'4rem'}}
            backgroundColor='brand.white'
            padding={{sm:'1rem', lg:'2rem'}}
            borderRadius={{lg:'0 0 0 17px'}}
            >
                {children}
            </GridItem>
        </Grid>
    )
}
export default LeftBoxDesc