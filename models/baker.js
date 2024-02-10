
// dependencies
const mongoose = require('mongoose')   // require mongoose.
const { Schema } = mongoose     // Define the shorthand for schema.



// Schema... When building a new model(object), remember that we always have to start by creating the Schema first. 
//           Otherwise, the controller and views have nothing to work with. 
const bakerSchema = new Schema({      //a new schema saved  to a variable called bakerSchema to create a Baker model.
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})



// model and export
const Baker = mongoose.model('Baker', bakerSchema)   // model assigned to Baker


module.exports = Baker  // Export the Baker model.
