let express = require('express');
let app = express();
let config = require('./config');

let staticPath = `${__dirname}/public`;

console.log(staticPath);
console.log(typeof express.static);

app.use(express.static(staticPath));

app.get('/cat', function(req,res){
  res.send('cats');
});

app.listen(config.port, function appStarted(){
  console.log(`Soma listening on ${config.port}`);
});
