const express = require("express");
const connectDB = require("./config/db");

const bodyParser = require('body-parser');




const app = express();
connectDB();
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));






app.get("/", (req, res) => res.send("Server running..."));



const ProfileRouter=require('./routes/api/profile')
app.use('/profile', ProfileRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started..."));
