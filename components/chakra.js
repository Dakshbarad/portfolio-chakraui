/*
This file contains the setup for Chakra that is used in _app.js file. ChakraProvider needs to be added at the root of our application.
*/

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({req}){
  return{
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
