import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { getBooks } from "../../server";

function Notionskills() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const booksData = await getBooks();
                setBooks(booksData);
            } catch (error) {
                console.log("Error fetching data from Notion:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <Box>
            {books.map(({ titulo, texto, destinationPage }) => (

                destinationPage==="skills" ?(
                <div key={titulo}> {/* Agrega una clave única para cada elemento */}
                    <Heading size="sm">{titulo}</Heading>
                    <Text>{texto}</Text>

                </div>
                ):null
                
            ))}
        </Box>
    );
}

export default Notionskills;
