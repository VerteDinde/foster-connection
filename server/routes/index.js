const express = require('express');
const router = express.Router();
const superAgent = require('superagent');
// const app = express();

router.get('/autocomplete', (request, response) => {
  console.log(request, 'testing');
});

router.post('/autocomplete/:place', (request, response) => {
  const place = request.body;
  console.log(`  
  
  ${request}
  
  `);
  superAgent
    .get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=${process.env.REACT_API_GOOGLE_API_KEY}`
    )
    .then(res => {
      console.log('were here');
      res.send(res);
    })
    .catch(err => console.log(err));
});

module.exports = router;