// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})



// helper methods ....Instance method(we need to call it to use it on a returned docoment(we need call it in the controllers/breads_controllers.js in our show route))
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`        // returns a sentence
}



//model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
