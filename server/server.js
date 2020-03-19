const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const sslRedirect = require('heroku-ssl-redirect');

require('dotenv').config();

const app = express();

app.use(sslRedirect(['development', 'production']));
app.use(morgan('dev'))
app.use(express.static('dist'))
app.use(express.static('public'));

app.get('/data/:lat/:lon', (req, res) => {
    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search?term=food&latitude=${req.params.lat}&longitude=${req.params.lon}`,
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    }).then(response => {
        res.send(response.data)
    }).catch(err => {
        console.log(err)
    })
});

app.get('/data/:id', (req, res) => {
    axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/${req.params.id}`,
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY}`
        }
    }).then(response => {
        res.send(response.data)
    }).catch(err => {
        console.log(err)
    })
});

module.exports = app;