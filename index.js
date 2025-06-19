import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'


const app = express();
const PORT = 3000;
const apiKey = '0af651eec33d3363ff66165763d40efa'

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.post('/', async (req, res)=>{
    const {city} = req.body;
    
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`)

    const result = response.data
    
    
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})