const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.get('/data', (req, res) => {
    axios({
        method: 'get',
        url: 'https://developers.zomato.com/api/v2.1/search?q=Mexican',
        headers: {
            'user-key': process.env.API_KEY}
    }).then(response => {
       res.send(response.data) 
    }).catch(err => {
        console.log(err)
    })
});

module.exports = app;