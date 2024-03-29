const React = require('react')
const Default = require('./layouts/default')



function Index ({breads, bakers, title})  {     {/*adding bakers to the breads index*/}
    return (
    <Default title={title}>
        <h2>Index Page</h2>
        <h3>Bakers</h3>    {/*Bakers*/} 
        <ul>
            {
                bakers.map((baker)=> {
                    return (
                        <li key={baker.id}>
                            <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <h3>Breads</h3>  {/*Breads */} 
                {/* Button added here */}
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div> 
            <div className="backButton">
              <a   href="/breads"><button>Go back to the index</button></a>
            </div>
           <ul>
               {
                   breads.map((bread, index) => {
                    return(
                        <li key={index}>  
                            <a href={`/breads/${bread.id}`}>
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




module.exports = Index