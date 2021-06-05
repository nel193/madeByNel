import React from 'react'
import Chart from "react-google-charts"
import {Grid, GridItem, Box} from '@chakra-ui/react'

const Data = () => {
    return (
    <Box
    margin={{sm:"6rem 0 0 0"}}
    display="flex"
    flexDirection="column"
    alignItems="center"
    >
        <Box
        margin="2rem 0"
        width='50vw'
        height='70vh'
        >
            <iframe 
            style={{background: "#FFFFFF",border: "none",borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} 
            width="100%" height="100%" 
            src="https://charts.mongodb.com/charts-local_admin-upqjc/embed/charts?id=7fd4f2d8-2d86-463c-bd87-299e9db58f96&theme=light">
            </iframe>
        </Box>
        <Box>
        </Box>
    </Box>

    )
}

export default Data