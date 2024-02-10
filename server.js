//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
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
app.use(express.static('public'))//static folder named public
app.use(express.urlencoded({extended: true}))




// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')

//ROUTES
app.get('/', (req, res) =>
{
    res.send('Welcome to an Awesome app about Breads')
})


})



  mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
  
  
//Listen for Connections
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)

})
