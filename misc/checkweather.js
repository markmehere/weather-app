process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const https = require('https');
let cities = require('../src/data/cities.json');

availableCities = [];

cities.forEach((city, i) => {
  setTimeout(() => {
    https.get(`https://www.metaweather.com/api/location/${city.woeid}/`, 
      (response) => {
        if (response.statusCode >= 200 && response.statusCode < 400) {
          console.log(`${city.name} FOUND!`);
          availableCities.push(city);
        }
        else {
          console.log(`${city.name} NOT FOUND!`);
        }
      }
    );
  }, 2000 * i);
});

setTimeout(() => console.log(JSON.stringify(availableCities, null, '\t')), 2000 * cities.length);