/*
Chakra uses its default theme for styling components. In order to override these styles we use the extendTheme functionality.
Ref: https://chakra-ui.com/docs/styled-system/customize-theme#theme-extension-withdefaultcolorscheme

These is the basic process to achieve this
// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

// 3. Pass the new theme to `ChakraProvider`
<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>

// 4. Now you can use these colors in your components
function Usage() {
  return <Box bg="brand.100">Welcome</Box>
}

ChakraProvider is our case is present in chakra.js
*/

import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
  global: props=> ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme