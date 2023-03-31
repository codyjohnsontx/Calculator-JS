const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});

app.post('/', (req, res) => {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;
    res.send(`The result of the addition calculator is ${result}`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname +'/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
var heightSquared = height ** 2;
var result2 = (weight/heightSquared).toFixed(2);
    res.send(`Your BMI is ${result2}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

