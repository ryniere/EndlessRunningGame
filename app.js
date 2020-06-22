const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.static("."));

const HTTP_PORT = process.env.PORT || 8080;


// ************* API Routes

app.get('/', (req, res) => {

  fs.readFile('./index.html', (err, data)=> {
      if(err) {
          
      } else {
          res.setHeader('content-type', 'text/html');
          res.write(data);
          res.end();
      }
      
  });
  
})

app.listen(HTTP_PORT,()=>{
    console.log(`server listening on: ${HTTP_PORT}`);
});