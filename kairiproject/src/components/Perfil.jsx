import { Box, Image, Text, Flex, Heading } from '@chakra-ui/react'
import foto from '../assets/Perfil.jpeg'


function Perfil() {
  return (
    <>
      <Flex flex='1' gap='8' alignItems='center' justifyContent='center' >
        <Image
            borderRadius='full'
            boxSize='5rem'
            src={foto}
            alt='Kairiyama Cristian'
        />
            <Box> 
            <Heading size='md'>Proyectos</Heading>
            <Text >+3</Text>
            </Box>
            <Box> 
            <Heading size='md'>Certificados</Heading>
            <Text>14</Text>
            </Box>
      </Flex>
      <Flex flex='2' alignItems='center' justifyContent='center' flexDirection='column' >

        <Text padding='4' align='center'>Full Stack Developer, Front with Html, Css and Javascript, react in process...
        Back: IA and Data Science with python in Process...
        </Text>

      </Flex>
    </>
  )
}

export default Perfil;
