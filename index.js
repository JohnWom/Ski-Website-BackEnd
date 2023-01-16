
require("dotenv").config();
const express = require("express");
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/', routes); // needed to use routes

const port = process.env.PORT;
app.listen(port, () =>
    {console.log(`server started on port ${port}`)}
);