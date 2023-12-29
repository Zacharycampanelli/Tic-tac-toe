import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';
import theme from './assets/theme/theme.js';
import { GameProvider } from './assets/theme/context.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GameProvider>
        <App />
      </GameProvider>
    </ChakraProvider>
  </React.StrictMode>
);
