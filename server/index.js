require('dotenv').config()
const express = require('express')
// const session = require('session')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db =>
    {app.listen(SERVER_PORT, () => console.log('Live on port ', SERVER_PORT))
    app.set('db', db)
})
