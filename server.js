const express = require('express');
const axios = require("axios");
const bParser = require('body-parser');
const app = express();
app.use(bParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/index.html')
});

app.post('/', (req, res) =>{
    let url = "https://api.coindesk.com/v1/bpi/currentprice/eur.json";
    axios.get(url).then((response)=>{
        let dis = (response.data.bpi.EUR.rate).replace(',', ''),
        num1 = Number(req.body.num1);
        res.write((num1*dis)+"");
        res.send();
    }).
    catch((error)=>{
        console.log(error);
    });
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});