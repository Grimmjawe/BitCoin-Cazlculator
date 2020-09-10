const express = require('express');
const app = express();
const bParser = require('body-parser');
app.use(bParser.urlencoded({extended: true}));

app.get('/', (request, response) =>{
    response.sendFile(__dirname+'/index.html')
});

app.post('/', (request, response) =>{
    let num1 = request.body.num1, num2 = request.body.num2;
    console.log('number 1 ', num1);
    console.log('number 2 ', num2);
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});