import { Client } from '@notionhq/client';
// const express = require('express');
// const cors = require('cors');
// var bodyParser = require('body-parser');
// const { list } = require('@chakra-ui/react');
// var jsonParser = bodyParser.json();

// const app =express();
// app.use(cors());
// const PORT = 4000;
// const HOST = "localhost";

async function getNotionData(){
    
    const notion = new Client ({auth:"secret_gqSDfkRejZYLqhx3yJoTngxHvQ1VNoNVz6KLrjolYtP",});
    
    const results = await notion.databases.query({
        database_id : "4e330c178f0a4bcb81d578dc58b1fe7e",
    });
    
    console.log(results);

}
getNotionData();





// app.listen(PORT, HOST, () => {
//     console.log("starting proxy at "+ HOST+ ":"+ PORT);
// })