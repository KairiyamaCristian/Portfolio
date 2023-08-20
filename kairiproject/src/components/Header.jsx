import { FaTwitter, FaInstagram, FaAdjust, FaGithub} from 'react-icons/fa'
import { Icon, Heading, Flex} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function Header(){

    return(
        <>
        <Flex justifyContent='space-around' alignItems='center' position='fixed' top='0'>
            <Heading as='h5' size='md'>{"<Kairi/>"}</Heading>
            <Flex gap='4'>  
                <Link href='https://twitter.com/Kairi_Cris' isExternal>
                <Icon as={FaTwitter} boxSize='4'/>
                </Link>
                <Link href='https://instagram.com/kairiyamacristian' isExternal>
                <Icon as={FaInstagram} boxSize='4'/>
                </Link>
                <Link href='https://github.com/KairiyamaCristian' isExternal>
                <Icon as={FaGithub} boxSize='4'/>
                </Link>
                <Link href='https://chakra-ui.com' isExternal>
                <Icon as={FaAdjust} boxSize='4'/>
                </Link>
            </Flex>
        </Flex>
        </>

    )    
}



export default Header