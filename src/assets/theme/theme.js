import { extendTheme } from '@chakra-ui/react';
import '@fontsource/outfit';
import  Button  from './Button';

const breakpoints = {
  base: 0,
  sm: '23.4375em',
  md: '48em',
  lg: '90em',
  xl: null,
  '2xl': null,
};

const colors = {
  darkAqua: '#31C3BD',
  aqua: '#65E9E4',
  orange: '#F2B137',
  lightOrange: '#FFC860',
  navy: '#1A2A33',
  darkBlue: '#1F3641',
  blueGray: '#A8BFC9',
  gray: '#DBE8ED',
};

const fonts = {
  heading: `Outfit, 'sans-serif'`,
  body: `Outfit, 'sans-serif'`,
};

const styles = {
    global: {
        'html, body': {
            backgroundColor: 'navy'
        }
    }
}

const textStyles = {
  h1: {
    fontFamily: 'Outfit',
    fontSize: '40px',
    fontWeight: 'bold',
    letterSpacing: '2.5px',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '1.25px',
  },
  h4: {
    fontSize: ['10px', '14px', '14px','16px'],
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  p: {
    fontSize: '14px',
    fontWeight: 'medium',
    letterSpacing: '0.875px',
    
  },
};

const components = {
    Button
}

const typography = {};

const theme = extendTheme({ breakpoints, colors, fonts, styles, textStyles, components,  });

export default theme;
