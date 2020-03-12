
// const bodyParser = require('body-parser');
// const path = require('path');

const port = 8080;

const express = require('express');
const app = express();
const path = require('path')
// Run the app by serving the static files
// in the dist directory
const app_path = "dist/ss-lazy-eval"


app.listen(3000);
app.use(express.static(path.join(__dirname,app_path)))
  .listen(port,()=>console.log(`listening on ${port}`));



// Start the app by listening on the default Heroku port

//

//
// app.listen(port, function() {
//     console.log('server running on localhost:' + port);
// });
