const express = require("express");
const app = express();

const port = 3000;

app.get("/api/resort_data/:resort", (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send("sup")
    console.log(`request for ${resort} recieved`);
});

app.listen(port, () =>
    {console.log(`server started on port ${port}`)}
);