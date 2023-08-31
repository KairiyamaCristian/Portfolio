import axios from 'axios';

export const getBooks = async () => {
    try {
        const response = await axios.get(
            'http://localhost:3002/portafolio'
        );

        const data = response.data;

        console.log(data);

        return data.map((page) => {
            const { properties } = page;
            const { titulo, subtitulo, texto, destinationPage } = properties;

            return {
                titulo: titulo.title[0].plain_text,
                subtitulo: subtitulo.rich_text[0].plain_text,
                texto: texto.rich_text[0].plain_text,
                destinationPage: destinationPage.rich_text[0].plain_text,
            };
        });
    } catch (error) {
        console.log('Error fetching data from Notion:', error);
        return [];
    }
};