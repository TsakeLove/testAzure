const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
app.get("/", function(request, response){

    response.send("<h2>testAzure</h2>");
});

app.listen(port);
