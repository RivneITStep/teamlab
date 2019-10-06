const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const bodyParser = require('body-parser');




const app = express();
connectDB();
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));






app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Server running..."));


app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;



const ProfileRouter=require('./routes/api/profile')
app.use('/profile', ProfileRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started..."));
