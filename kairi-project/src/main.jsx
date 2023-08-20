import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import {Navigator} from './components/Navigator'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({ 
  config,
  breakpoints,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navigator />
    </ChakraProvider>
  </React.StrictMode>,
)
