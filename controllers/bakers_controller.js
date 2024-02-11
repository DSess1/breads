// dependencies
const express = require('express')                        //reqire rhe express package
const baker = express.Router()                            //Call on the router express method and save it to a variable named baker.
const Baker = require('../models/baker.js')               //require the baker model file
const bakerSeedData = require('../models/baker_seed.js')  //require the baker seed file



//Now that we have our seed route set up in server.js, Make a GET route that goes to /data/seed.
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)      // calls the insertMany method on the Baker model in the callback
        .then(res.redirect('/breads'))   //sends the response to redirect to /breads.
})


// Index: Baker Index route
baker.get('/', (req, res) => {
    Baker.find()
         .populate('breads')
        .then(foundBakers => {    // in the promise for .find()..pass through it a callback function with an argument of foundBakers.
            res.send(foundBakers)
        })
})                    


// export the baker router..
module.exports = baker                    
//now we need to point to it in the server.js