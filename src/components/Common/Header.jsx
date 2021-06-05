import { Box, Image, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/statics/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switchmode from './Switchmode';

const Header = () => (
  <Box
    w={{sm:'100%'}}
    backgroundColor='brand.dgray4'
    display='flex'
    justifyContent={{sm:'center'}}
    h='6rem'
    position={{ sm: 'fixed' }}
    top='0'
    zIndex='100'
    boxShadow={{ sm: '0 10px 10px rgba(27, 35, 55, 0.5)' }}
  >
    <Box
      h={{ sm: '6rem' }}
      w={{ sm: '100%', xl: '60%'}}
      d='flex'
      justifyContent={{ sm: 'space-between' }}
    >
      <Link to='/'>
        <Image
          boxSize={{ sm: '4rem' }}
          margin={{ sm: '1rem 0 0 .5rem' }}
          src={logo}
          alt=''
        />
      </Link>
      <Box
      d='flex'
      >
          <List
            d={{sm:'none',md:'flex'}}
            justifyContent={{ sm: 'space-around' }}
            alignItems={{ sm: 'center' }}
            h='100%'
            w={{ md: '25rem' }}
            // fontSize={{ xl: '1.2rem' }}
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
        <Box
          d='flex'
          alignItems='center'
          margin=' 0 1rem 0 0'
        >
          <Switchmode />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Header;
