const express  = require('express');
let bodyParser = require('body-parser');
const path = require('path');

//create express app instance
const app = express();
//set the port as env variable
const PORT = process.env.PORT || 8080;
// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

//The server will now listen on the provided port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));