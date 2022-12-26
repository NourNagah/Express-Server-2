const express = require("express"); // express application
const mongoose = require("mongoose");
const User= require('./src/user');
const router=require('./src/routes');
const bodyParser=require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(express.json({ limit: "50mb" }));
app.use(cors({
  origin:["http://127.0.0.1:5501/index.html","http://127.0.0.1:5501", "https://darderaz.netlify.app/", "https://darderaz.netlify.app/"]
}));
app.use(router);
const uri="mongodb+srv://Nour_Nagah:sJynekMfErphK5PW@cluster0.sa0dvbr.mongodb.net/?retryWrites=true&w=majority";
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology:true })
       .then(() => {
         console.log('MongoDB connection successful');
         app.listen(PORT)
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
new Database();


app.get('/', function (req, res) {
res.send("Welcome to Nour's server");
 });

app.use((req, res) => {
    res.status(404).send("Error: routes doesn't exist (-_-)");
  });





