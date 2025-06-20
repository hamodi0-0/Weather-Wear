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
    
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

    const result = response.data
    console.log(result);
    res.render('index.ejs', {data : result})    
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})