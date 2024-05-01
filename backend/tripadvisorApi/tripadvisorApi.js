const fetch = require('node-fetch');
const key = process.env.TRIPADVISOR_ACCESS_KEY
const url = `https://api.content.tripadvisor.com/api/v1/location/search?language=en&key=${key}`;
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
  .then(res => res.json())
  .catch(err => console.error('error:' + err));