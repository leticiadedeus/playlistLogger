import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: false,
}))

app.get('/', function (req, res) {
  res.send('This is your playlist logger, Welcome!')
})

app.listen(4000, () => console.log(`Server is listening on 4000`))