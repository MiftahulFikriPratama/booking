const UserRoute = require("./routers/user-route");
const express = require("express");

const app = express();
app.use(express.json());

app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and Running...'));