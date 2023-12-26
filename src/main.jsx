import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './assets/theme/theme.js';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
       <App />
    </ChakraProvider>
  </React.StrictMode>
);
