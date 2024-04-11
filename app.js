//write your codes here
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 4000

app.listen(port, ()=> console.log(`listening to port ${port}...`));

app.use(bodyParser.json())
app.use(express.static('views'));

const cars = [
    {id: 1, name: 'Probox', country: 'Japan'},
    {id: 2, name: 'Vitz', country: 'Japan'},
    {id: 3, name: 'Forestor', country: 'Japan'},
    {id: 4, name: 'Prado', country: 'Japan'},
    {id: 5, name: 'Lc 300 series', country: 'Japan'},
    {id: 6, name: 'vogue', country: 'England'}
]

// get all cars
app.get('/api/cars',(req, res) =>{
    res.send(cars)
})

app.post('/api/cars',(req, res) =>{
    const newCar = {
        id: cars.length + 1,
        name: req.body.name,
        country: req.body.country
    };

    cars.push(newCar);
    res.status(201).json(newCar);
})

