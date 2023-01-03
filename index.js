const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("sup")
    console.log("request recieved");
});

app.listen(3000, () =>
    {console.log("server started on port 3000")}
);