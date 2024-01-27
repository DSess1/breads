const React = require('react')
const Default = require('./layouts/default')

function Index({breads, title}) {
   return (
       <Default>
           <h2>Index Page</h2>
           <ul>
               {
                   breads.map((bread, index) => {
                    return(
                        <li key={index}>
                            <a>href={`/breads/${index}`}
                               {bread.name}
                            </a>
                        </li>
                    )
                    
                   })
               }

           </ul>
                          
       </Default>
   ) 
}


<div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>


module.exports = Index