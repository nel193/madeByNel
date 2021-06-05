import { Box, List, ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <Box
      height={{ sm: '3.5rem', md: '6rem' }}
      position={{ sm: 'fixed' }}
      bottom={{sm:'0', md:'initial'}}
      right='0'
      left={{sm:'0', md:'50%'}}
      backgroundColor='brand.dgray4'
      zIndex='101'
      borderTop={{ sm: '2px solid #fff', md:'initial'}}
      display='none'
      justifyContent='center'
    >
      <List
        d='flex'
        justifyContent={{ sm: 'space-around' }}
        alignItems={{ sm: 'center' }}
        h='100%'
        w={{ sm: '100%', xl: '60%' }}
      >
        <ListItem
          color='brand.lgray4'
          fontWeight='900'
        >
          <FontAwesomeIcon icon={['fas', 'address-card']} size='lg' />
                    &nbsp;
          <Link to='/cv'>CV</Link>
        </ListItem>
        <ListItem
          color='brand.lgray4'
          fontWeight='900'
        >
          <FontAwesomeIcon icon={['fas', 'palette']} size='lg' />
                     &nbsp;
          <Link to='/portfolio'>PORTFOLIO</Link>
        </ListItem>
        <ListItem
          color='brand.lgray4'
          fontWeight='900'
        >
          <FontAwesomeIcon icon={['fas', 'rocket']} size='lg' />
                    &nbsp;
          <Link to='/services'>SERVICES</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navbar;
