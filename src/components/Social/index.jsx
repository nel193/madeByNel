import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const index = () => {
  return (
    <Box
      margin={{ sm: '5rem 0 0' }}
      padding={{ sm: '0 0 6rem', xl: '0 0 10rem' }}
      d='flex'
      justifyContent='space-evenly'
    >
      <Box>
        <a href='/'>
          <FontAwesomeIcon style={{ color: '#fff' }} icon={['fas', 'paper-plane']} size='2x' />
        </a>
      </Box>
      <Box>
        <a href='/'>
          <FontAwesomeIcon style={{ color: '#fff' }} icon={['fab', 'github']} size='2x' />
        </a>
      </Box>
      <Box>
        <a href='/'>
          <FontAwesomeIcon style={{ color: '#fff' }} icon={['fab', 'linkedin-in']} size='2x' />
        </a>
      </Box>
      <Box>
        <a href='/'>
          <FontAwesomeIcon style={{ color: '#fff' }} icon={['fab', 'behance']} size='2x' />
        </a>
      </Box>
    </Box>
  );
};

export default index;
