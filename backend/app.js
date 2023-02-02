import express from 'express';
import dotenv from 'dotenv';
import  data  from '../frontend/src/data.js';

const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
})
app.get('/api/products/slug:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if(product){
        res.send(product);
    }else {
        res.status(404).send({message: 'Product Not Found'})
    }
})

dotenv.config();

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Server is listening on port http://localhost:${port}`))