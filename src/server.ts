import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nunjucks from 'nunjucks';
const json = require('../products.json');

dotenv.config()

const app = express()
app.use(cors())
app.use(express.static("public/"));

nunjucks.configure("src/views", {
    express: app,
    noCache: true
})

var numberFormarter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
});

app.use(express.json())
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)



interface Products {
    productId: number;
    name: string;
    salesChannel: number;
    available: boolean;
    bestPriceFormated: number;
    bestPrice: number;
    quantity: number;
    image: string;
}

const products: Products[] = json.cart.item;
let total = 0;
products.forEach(el => {
    total += el.bestPrice / 100;
});
const totalFormated = numberFormarter.format(total);
app.get('/', async (req, res) => {
    res.render('index.html', {
        products,
        totalFormated
    });
})

const port = process.env.SERVER_PORT
app.listen(port || 3333, () => {
    console.log(`⚡ server is listening on port ${port || 3333}`)
})