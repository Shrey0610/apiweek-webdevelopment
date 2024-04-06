const PORT= 8000;

const express = require('express');
const axios= require('axios');
const cherrio = require('cheerio');

const app = express();

const challenges = [];

app.get('/', (req, res) => {
  res.json({ message: 'Hii, learning API is fun!'});
});

app.get('/challenges', async(req,res) => {
    axios.get('https://ghw.mlh.io/challenges')
    .then((response) => {
        const html = response.data;
        const $ = cherrio.load(html);

       $('a.contains("")', html).each(function() {
              const title = $(this).text();
              const url = $(this).attr('href');
    
              challenges.push({
                title,
                url,
              });
        
        res.json(challenges);
    })  
    

})
}
)

app.listen(PORT, () => console.log('running on- `{$PORT}`'));