import { Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const CenterBoxDesc = (props) => {
    const {img, subtitle, textureImg, children} = props
    return (
        <Grid
        gridColumn={{
            sm:'1/4', 
            md:'2/5',
            lg:'3/7'
        }}
        gridTemplateColumns={{sm:'repeat(3, 1fr)'}}
        margin={{sm:'0 1rem 2rem'}}
        borderRadius='20px'
        boxShadow='0px 5px 10px 3px rgba(27, 35, 55, 0.5)'
        borderWidth='3px'
        borderStyle='solid'
        borderColor='brand.lgray2'
        >
            <GridItem
                gridColumn={{sm:'1/4'}}
                padding={{sm:'1rem'}}
                backgroundImage={`url(${textureImg})`}
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
                minHeight={{sm:'3rem'}}
                borderRadius='20px 20px 0 0'
            >
                <Text as='h3'>
                    {subtitle}
                </Text>
            </GridItem>
            <GridItem 
            gridColumn={{sm:'1/4'}}
            padding={{sm:'1.5rem 2rem'}}
            borderRadius='0 0 17px 17px'
            minHeight={{sm:'3rem'}}
            backgroundColor='brand.white'
            >
                {children}
            </GridItem>
        </Grid>
    )
}

export default CenterBoxDesc
