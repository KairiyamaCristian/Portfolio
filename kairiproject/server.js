import { Client } from '@notionhq/client';

const DATABASE_ID = '4e330c178f0a4bcb81d578dc58b1fe7e'

const notion = new Client({
    auth: import.meta.env.NOTION_TOKEN
})

export const getBooks = async ({filterBy} = {})=>{
    const query = {database_id: DATABASE_ID}

    if(filterBy){
        query.filter = { 
            property:'destinationPage',
            multi_select:{
                contains:filterBy
            }
        }
    }
    const {results} = await notion.databases.query(query)

    return results.map(page =>{
        const { properties } = page
        const { titulo, subtitulo, texto} = properties
    
        return{
        
            titulo: titulo.title[0].plain_text,
            subtitulo: subtitulo.rich_text[0].plain_text,
            texto: texto.rich_text[0].plain_text
        }
    })
}


















// const express = require('express');
// const cors = require('cors');
// var bodyParser = require('body-parser');
// const { list } = require('@chakra-ui/react');
// var jsonParser = bodyParser.json();

// const app =express();
// app.use(cors());
// const PORT = 4000;
// const HOST = "localhost";

// async function getNotionData(){
    
//     const notion = new Client ({auth:"secret_gqSDfkRejZYLqhx3yJoTngxHvQ1VNoNVz6KLrjolYtP",});
    
//     const results = await notion.databases.query({
//         database_id : "4e330c178f0a4bcb81d578dc58b1fe7e",
//     });
    
//     console.log(results);

// }
// getNotionData();

// // app.listen(PORT, HOST, () => {
// //     console.log("starting proxy at "+ HOST+ ":"+ PORT);
// // })