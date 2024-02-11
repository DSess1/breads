
// dependencies
const mongoose = require('mongoose')   // require mongoose.
const { Schema } = mongoose     // Define the shorthand for schema.

const Bread = require('./bread')


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
    },   {toJSON: {virtuals:true}}) 
    




// Virtuals://   Creating the Virtual
bakerSchema.virtual('breads', {
    ref: 'Bread',           // ref should be equal to the related model's schema, which would be 'Bread' in this case           
    localField: '_id',      //localField should be equal to The field on the parent that matches the child's reference field value, which would be '_id'
    foreignField: 'baker'   //foreignField should be equal The reference field on the children documents, which would be 'baker' in this case
})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)   // model assigned to Baker


module.exports = Baker  // Export the Baker model.
