/*
This is the home component which is shown when the website is loaded along with the other components that are present in _app.js
*/
// Client-side transitions - next/link
import NextLink from 'next/link'
import {
  Link,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

// Make chakra ui use next/image to optimize the profileImage. Chakra factory serves as a function that can be used to enable custom component receive chakra's style props
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full-stack developer based in India!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Daksh Barad
            </Heading>
            <p>Digital Craftzman ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              w="100px"
              h="100px"
              display="inline-block"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/daksh.jpeg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            blandit congue justo quis suscipit. Sed imperdiet consectetur nunc
            et volutpat. Vestibulum blandit arcu at vulputate cursus. Proin
            finibus diam in.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Bharuch, India.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated with a Bachelor&apos;s in Computer Engineering from
            Gujarat Technological University
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked at TCS
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Looking for React Developer Position in a startup
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Camping, Trekking, Bike Riding, Travelling, Designing, Architecture
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/dakshbarad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @dakshbarad
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/dakshbarad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @dakshbarad
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/daksh_barad" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @daksh_barad
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              My YouTube channel (&gt;100k subs)
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid> */}

          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
