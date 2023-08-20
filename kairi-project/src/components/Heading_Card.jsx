import { Box,Heading, Avatar, Text} from "@chakra-ui/react";

function HeaderCard() {
    return(
        <>
        <Avatar name='Kairi' />

        <Box>
        <Heading size='sm'>Kairiyama, Cristian Nahuel</Heading>
        <Text>Programador Web</Text>
        </Box>  
        </>
    )
}

export default HeaderCard;
