const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
//const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

/*
mongoose.connect( process.env.MONGODB_URI, {
  dbName: 'ExampleDB',
  useNewUrlParser: true
}).then( () => console.log('connected to DB') )
  .catch(err => console.log(err));
*/

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
