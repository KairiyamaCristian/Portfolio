import { Button, Flex , Icon} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun} from 'react-icons/fa'

function ToggleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <>
      <Flex position='fixed' justify='flex-end' w='100%' zIndex='1' top='0'>
        <Button onClick={toggleColorMode} >
         {colorMode === 'light' ? <Icon as={FaMoon}></Icon> : <Icon as={FaSun}></Icon>}
        </Button>
      </Flex>
      </>
    )
  }

export default ToggleColorMode