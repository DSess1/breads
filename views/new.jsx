const React = require('react')
const Default = require('./layouts/default')

function New ({bakers}) {   {/*/Pass the New component an argument of {bakers} so that it accepts the variable we passed it. */}
    return (
      <Default>
        <h2>Add a new bread</h2>
         <form action="/breads" method="POST">
         
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />       
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
             {bakers.map((baker) => {      {/* Map over the bakers array.In the map, return an option element that has a value attribute equal to the current baker's ID, and set its text to the current baker's name.*/}
                return(
                  <option value={baker.id} key={baker.id}>{baker.name}</option>
                )
             })}
            
          </select>
          <input
            type="text"
            name="image"
            id="image"
            required
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
      {/* Button added here */}
          <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
          </div>
       </form>
      </Default>
    

  
    )
}




module.exports = New

