import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'


const app = express();
const PORT = 3000;


app.get('/', (req, res)=>{
    res.render('index.ejs')
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})