const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const { Router } = require('express');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Admin:admin321@project.0tb9c.mongodb.net/highGarden_Db?retryWrites=true&w=majority';
//const DB_URL = 'mongodb+srv://MyStock123:stock123@mystock.sjdvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT,() => {
    console.log(`App is running on ${PORT}`);
});

