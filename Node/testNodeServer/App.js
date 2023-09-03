const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const minnieful = require('./route/minnieRoute.js')
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/minnieful', minnieful);
app.get('/test', function(req, res){
    console.log("test route hit; server is up");
    res.send({
        code: 200,
        message:  "server is up"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})