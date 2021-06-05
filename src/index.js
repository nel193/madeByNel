import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBehance, faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressCard,
  faMoon,

  faPalette, faPaperPlane,

  faRocket,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/App';

faLinkedinIn;

library.add(
  faGithub,
  faPaperPlane,
  faLinkedinIn,
  faBehance,
  faAddressCard,
  faRocket,
  faPalette,
  faMoon,
  faSun,
);

const breakpoints = createBreakpoints({
  sm: '300px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1600px',
});
const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        bg: 'brand.dgray3',
      },
      h2:{
        color:"brand.white", 
        fontSize:{sm:'1.5rem', lg:'2rem'}
      },
      h3:{
        color:"brand.lgray4",
        fontSize:{sm:'1.3rem', lg:'1.6rem'}
      },
      h4:{
        color:"brand.lgray3",
        fontSize:{sm:'1.2rem', lg:'1.4rem'}
        }
    },
  },
  colors: {
    brand: {
      'base': '#138EE8',

      'light1': '#4DB8E5',
      'light2': '#95D6EA',
      'light3': '#C4E5EE',
      'light4': '#DAEFF1',

      'dark1': '#0C66C0',
      'dark2': '#06429D',
      'dark3': '#150273',
      'dark4': '#1F005C',

      'comp1': '#FFC806',
      'comp2': '#F2A94A',
      'comp3': '#F4B176',
      'comp4': '#F5D1BC',

      'gray': '#648196',

      'lgray1': '#849BA9',
      'lgray2': '#9FB0B7',
      'lgray3': '#BDC5C7',
      'lgray4': '#E5E6E6',

      'dgray1': '#546D83',
      'dgray2': '#3F5369',
      'dgray3': '#2A384C',
      'dgray4': '#1B2237',

      'white': '#fff',
      'black': '#0e0e0e',

      'textShadow': 'rgba(0, 0, 0, 0.5)',
      'shadowColor': 'rgba(27, 35, 55, 0.5)',

      'alert': '#F67600',
      'warning': '#FF0633',
      'error': '#A0A0A0',
      'info': '#06ADF3',
      'success': '#04FFF0',
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  ,
  document.getElementById('app'),
);
