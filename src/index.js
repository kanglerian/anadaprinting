import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FE7038',
      200: '#B63402'
    }
  }
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);