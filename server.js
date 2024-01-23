const express = require('express')

require('dotenv').config()
const PORT = process. env.PORT
const app = express()

app.get('/', (req, res) =>
{
    res.send('Welcome to an Awesome app about Breads')
});

app.use('/breads', require('./controllers/breads_controller'))

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)

})
