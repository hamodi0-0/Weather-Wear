import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import 'dotenv/config'
import { springSuggestions } from "../005 API Project/public/phrases/spring.js";
import { summerSuggestions } from "../005 API Project/public/phrases/summer.js";
import { winterSuggestions } from "../005 API Project/public/phrases/winter.js";


const app = express();
const PORT = 3000;
const apiKey = process.env.API_KEY;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.post('/', async (req, res)=>{
    const {city} = req.body;
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        const result = response.data
        

        res.render('index.ejs', {
            data : result,
            summer : summerSuggestions,
            spring : springSuggestions,
            winter : winterSuggestions
        })    
        
    } catch (error) {
        res.render('error.ejs', {data : error.response.data})    
    }
   
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})