

import React from 'react'
import { useDisclosure} from '@chakra-ui/react'
import { Grid, Image ,Flex, Text} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import { Icon, Button} from '@chakra-ui/react'
import { FaTh, FaAddressCard} from 'react-icons/fa'
import  Cards  from './Cards.jsx';


//imagenes
import django from '../assets/certificados/Django.png'
import backend from '../assets/certificados/Backend.png'
import frontend from '../assets/certificados/Front.png'
import css from '../assets/certificados/Css.png'
import javascript from '../assets/certificados/Javascript.png'
import javascriptp from '../assets/certificados/Practico-javascript.png'
import react from '../assets/certificados/React.png'

import portfolio from '../assets/proyectos/portafolio.png'
import login from '../assets/proyectos/login.png'
import admin from '../assets/proyectos/djangoadmin.png'
import asistencia from '../assets/proyectos/asistencia.png'

import githublink from '../assets/git.png'

const SkillsImgs=[
  django,
  backend,
  frontend,
  css,
  javascript,
  javascriptp,
  react
]

const ProyectsImgs=[
  portfolio,
  login,
  admin,
  asistencia

]

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function Divisor() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  return (
    <>
      <Tabs>
      
        <TabList >
          <Flex flex='1' gap='8' justifyContent='space-evenly'>
          <Tab><Icon as={FaTh} /></Tab>
          <Tab><Icon as={FaAddressCard} /></Tab>
          </Flex>
        </TabList>
 
        <TabPanels >
          <TabPanel padding='0'>
            <Grid templateColumns='repeat(3, 1fr)' gap='1'>
            {ProyectsImgs.map((img, index) =>{
              return(
                <Image width={240} height={240} key={`project-${index}`} src={img} alt='django'ref={btnRef} onClick={onOpen}/>
              )})
              }
            </Grid>
          </TabPanel>
          <TabPanel padding='0'>
            <Grid templateColumns='repeat(3, 1fr)' gap='1'>
              {SkillsImgs.map((img, index) =>{
              return(
                <Image key={`skill-${index}`} src={img} alt='django'ref={btnRef} onClick={onOpen}/>
              )})
              }
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerBody>
            <Cards foto={githublink}>
              <Text>Conoce mas de mis proyectos en github....</Text>
            </Cards>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Ir hacia Github</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Divisor
