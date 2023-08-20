
import { Card, CardHeader, CardBody, CardFooter, Flex} from '@chakra-ui/react'
import {IconButton, Image } from "@chakra-ui/react";
import { FaHome} from 'react-icons/fa'


function Cards(props) {

    return(
    <Card maxW='lg'>
    <CardHeader>
        <Flex spacing='2'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        {props.children}
        </Flex>
        <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='Se tag <text> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
            ee menu'
            icon={FaHome}
        />
        </Flex>
    </CardHeader>
    <CardBody >
    <Image
        objectFit='cover'
        src={props.foto}
        alt='Foto de perfil'
        borderRadius='16'
    />
    </CardBody>
    <CardFooter>

    </CardFooter>
    </Card>
    )

    
}



export default Cards;