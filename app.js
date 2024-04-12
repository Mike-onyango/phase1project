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

const proboxBtn = document.getElementById('proboxBtn');
const vitzBtn = document.getElementById('vitzBtn');
const foresterBtn = document.getElementById('foresterBtn');

// Event listener for Probox button
proboxBtn.addEventListener('mouseover', () => {
    console.log('Mouseover event on Probox button');
    // Add your desired functionality here
});

// Event listener for Vitz button
vitzBtn.addEventListener('click', () => {
    console.log('Click event on Vitz button');
    // Add your desired functionality here
});

// Event listener for Forester button
foresterBtn.addEventListener('keydown', (event) => {
    console.log('Keydown event on Forester button');
    // Add your desired functionality here
    console.log('Pressed key:', event.key);
});



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

