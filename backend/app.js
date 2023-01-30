import express from 'express';
import dotenv from 'dotenv';
import  data  from '../frontend/src/data.js';

const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server is listening on port http://localhost:${port}`))