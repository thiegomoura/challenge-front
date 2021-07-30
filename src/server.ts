import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)

app.get('/', async (req, res) => {
    res.render('index.html');
})

const port = process.env.SERVER_PORT
app.listen(port || 3333, () => {
    console.log(`👍 server is running on port ${port || 3333}`)
})