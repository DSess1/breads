const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
//set up view
app.set('views', __dirname + '/views')//must add this line in your rest rant folder
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) =>
{
    res.send('Welcome to an Awesome app about Breads')
});

app.use('/breads', require('./controllers/breads_controller'))

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)

})
