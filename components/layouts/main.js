// To add the head tag
import Head from 'next/head' 
// Next.js supports lazy loading external libraries with import() and React components with 'next/dynamic'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

// Laxyloading the voxel-dog using dynamic
const LazyVoxelDog = dynamic(()=> import('../voxel-dog'),{
  ssr: false,
  loading: ()=> <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daksh's homepage" />
        <meta name="author" content="Daksh Barad" />
        <meta name="author" content="crazyDog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Daksh Barad" />
        <meta name="og:title" content="Daksh Barad" />
        <meta property="og:type" content="website" />
        <title>Daksh Barad - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        <LazyVoxelDog />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
