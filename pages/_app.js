/*
Next.js uses the 'App' component to inititalize pages. If we want to override this and control the page initialization then we need to do that in _app.js file.
*/

// The default layout of the page, which includes the Head, navbar and some other things that remain same for all pages
import Layout from '../components/layouts/main'
// Just a function that imports font from google fonts
import Fonts from '../components/fonts'
// AnimatePresence allows components to animate out when they're removed from the react tree
import { AnimatePresence } from 'framer-motion'
// Initialization related to chakra is shifted to a separate file
import Chakra from '../components/chakra'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
