const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 3000;

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from the backend')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })