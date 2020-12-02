const express = require('express');
const app = express();
const port = process.env.port || 8080;
app.get("/", function(request, response){

    response.send("<h2>testAzure</h2>");
});

app.listen(port);
