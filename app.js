//Load express module with `require` directive
const express = require('express'),
    app = express();

//request and response in root URL('/')
app.get('/', (req, res) => {
    res.send('Node Unit-Testing');
});

//listening server on port 8099
app.listen(8099, () => {
    console.log('App listening on port 8099');
});