import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: 'Hello agenciaPlus'})
})

const port = process.env.SERVER_PORT
app.listen(port || 3333, () => {
    console.log(`🏃‍♂️ server is running on port ${port || 3333}`)
})