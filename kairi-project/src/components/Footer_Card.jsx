import { Text } from '@chakra-ui/react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'



function foot(){
    return(
        <>
        
        <Text>
        Este Proyecto es un clon de instagram realizado con React y 
        librerias como chacra ui para ser utilizado como proyecto web 
        para ser utilizado como portafolio donde muestre mis proyectos...
        </Text>
        <AvatarGroup size='md' max={2} padding='1'>
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        </AvatarGroup>
        
        </>
    )
}

export default foot