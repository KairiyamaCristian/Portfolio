import {
    Button,
    Input,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'  

// The below import defines which components come from formik
function FormikExample() {
  return(
    <>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder='name' />
                </FormControl>
            <FormControl>
                <FormLabel>Proyect</FormLabel>
                <Input type='text' />
            </FormControl>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Input type='text' />
            </FormControl>
            
            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              Send me
            </Button>
    </>

          )
}

export default FormikExample;