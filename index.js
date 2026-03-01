require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Piyu!')
})

app.get('/twitter', (req, res) => {
    res.send('praveen_raj027')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login at this backend server</h1>')
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})
