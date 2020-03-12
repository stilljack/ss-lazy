
// const bodyParser = require('body-parser');
// const path = require('path');

const port = 8080;

const express = require('express');
const app = express();
const path = require('path')
// Run the app by serving the static files
// in the dist directory
const app_path = "dist/ss-lazy-eval"

app.use('/', express.static(path.join(__dirname,app_path)))
  .get('*',(req, res)=>restore.sendfile(path.join(__dirname,app_path,
    +"index.html")))
  .listen(port,()=>console.log(`listening on ${port}`));
// Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || port);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/ss-lazy/eval/index.html'));
// });
// app.listen(port, function() {
//     console.log('server running on localhost:' + port);
// });
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// //
// // app.use('/api', api);
//

//
// app.listen(port, function() {
//     console.log('server running on localhost:' + port);
// });
