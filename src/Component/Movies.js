import React from 'react'
import { useGlobalContext } from './context'
import './Movies.css'
const Movies = () => {
  const{movie}=useGlobalContext();
  console.log(movie)  
  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center",color:"brown",fontWeight:"bolder"}}>Top Movies</h1>
            <div className='mainContainer'>

      {
        movie.map((elem,key)=>
        
          //   <div className='subContainer'>
          //     <div className='img-container'>
          //       <img src={elem.Poster} alt="image"/>
          //       </div>
          //  <h1 key={elem.id}>{elem.Title}</h1>
          //   </div>
          
          <div class="container">
          <div class="card">
           <div class="img_container">
              <img src={elem.Poster} id="image"/>
           </div>
           <div class="content">
              <div class="details">
                  <h1>{elem.Title}</h1>
                  <div>
                      {/* <h2>{elem.Title}</h2> */}
                  </div>
                  <div class="btns">
                      <button>View</button>
                      <button>Like</button>
                  </div>
              </div>
            
           </div>
          </div>
      
          </div>
        )
      }
            </div>
      
    </div>
  )
}

export default Movies