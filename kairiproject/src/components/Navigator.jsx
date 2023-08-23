import Dark from './Darkmode'
import Perfil from './Perfil'
import Divisor from './Divisor'
import Skills from './Skills'
import Contact from './Contact'
import Cards from './Cards'
import HeaderCard from './Heading_Card'
import Footer_Card from './Footer_Card'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaHome, FaUser, FaSearch, FaEnvelopeOpenText} from 'react-icons/fa'
import { VStack,Box} from '@chakra-ui/react'

//
// import  Foto  from '../assets/Perfil.jpeg'
// import  kairi8  from '../assets/kairi/kairi8.jpg'
// import  kairi9  from '../assets/kairi/kairi9.jpg'
// import  kairi10  from '../assets/kairi/kairi10.jpg'
// import  kairi11  from '../assets/kairi/kairi11.jpg'
// import  kairi12  from '../assets/kairi/kairi12.jpg'
// import  kairi13  from '../assets/kairi/kairi3.jpg'
import  kairi  from '../assets/kairi/kairi_ciberpunk.jpg'
import  kairi2  from '../assets/kairi/kairipj.jpg'
import  kairi3  from '../assets/kairi/kairipj2.jpg'
import  kairi4  from '../assets/kairi/kairi4.jpg'
import  kairi5  from '../assets/kairi/kairi5.jpg'
import  kairi6  from '../assets/kairi/kairi6.jpg'
import  kairi7  from '../assets/kairi/kairi7.jpg'

function Navigator() {
  return (
    <>
    <VStack  
    width={{ base: '100%', sm: '100%', md: '55%' }} 
    margin='auto'
    h='100vh'
    >
      <Dark/>
    <Tabs defaultIndex={3} h='100%'>
    <Box>
    <TabPanels >
        <TabPanel>
          <Cards foto={kairi}>
            <HeaderCard></HeaderCard>
            <Footer_Card></Footer_Card>
          </Cards>
          <Cards foto={kairi2}>
            <HeaderCard></HeaderCard>
            <Footer_Card></Footer_Card>
          </Cards>
          <Cards foto={kairi3}>
            <HeaderCard></HeaderCard>
            <Footer_Card></Footer_Card>
          </Cards>
        </TabPanel>
        <TabPanel>
          <Cards foto={kairi4}>
            <Skills/>    
          </Cards>
          <Cards foto={kairi5}>
            <Skills/>
          </Cards>
          <Cards foto={kairi6}>
            <Skills/>
          </Cards>
          <Cards foto={kairi7}>
            <Skills/>
          </Cards>
        </TabPanel>
        <TabPanel >
          <Contact/>
        </TabPanel>
        <TabPanel>
          <Perfil/>
          <Divisor/>
        </TabPanel>
    </TabPanels>
    </Box>
    <Box>
    <TabList justifyContent='center' justifyItems='center'>
      <Flex flex='1' gap='8' justifyContent='space-evenly' position='fixed' bottom='0'>
        <Tab><Icon as={FaHome} /></Tab>
        <Tab><Icon as={FaSearch} /></Tab>
        <Tab><Icon as={FaEnvelopeOpenText} /></Tab>
        <Tab><Icon as={FaUser} /></Tab>
      </Flex>
    </TabList>
    </Box>
    </Tabs>
    </VStack>
    </>
  )
}

export {Navigator}
