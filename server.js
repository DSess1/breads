
//DEPENDENCIES
const express = require('express')
// DEPENDENCIES
const methodOverride = require('method-override')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//set up view   //MIDDLEWARE
app.set('views', __dirname + '/views')//must add this line in your rest rant folder
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// MIDDLEWARE
app.use(methodOverride('_method'))


// MIDDLEWARE
app.use(express.static('public'))//static folder named public

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

//ROUTES
app.get('/', (req, res) =>
{
    res.send('Welcome to an Awesome app about Breads')
});


//Breads
app.use('/breads', require('./controllers/breads_controller'))

// 404 Page
app.get('*', (req, res) => {
    res.send('error404')
  })
  
//Listen for Connections
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)

})
