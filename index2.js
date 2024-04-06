// // API vs Webhook: API is simple request-response, 
// // webhook is a reversed API, it pings server when data is available rather than sending data when requested.

// const PORT= 8000;

// const express = require('express');
// const axios= require('axios');
// const cheerio = require('cheerio');

// const app = express();

// const challenges = [];

// app.get('/', (req, res) => {
//   res.json({ message: 'Hii, learning API is fun!'});
// });

// app.get('/challenges',(req,res) =>{
//     axios.get('https://ghw.mlh.io/challenges')
//     .then(response =>{
//         const html= response.data
//         const $ = cheerio.load(html);   //take out data from html and map them using cheerio

//         $('a.contains("")', html.each(function(){
//            const title= $(this).text().text(); 
//            const url= $(this).attr('href');

//            challenges.push({
//                title,
//                url
//            })   
//         }))
//         res.json(challenges);
//     })
// })

// app.listen(PORT, () => console.log('running on- `{$PORT}`'));

