import React, { useEffect, useState } from 'react'
import "./HeaderStoreApp.css"
import Card2 from './Card2'
import XCard from './XCard'
import axios from "axios"
const HeaderStoreApp = ({api}) => {



  const [movies, setMovies] = useState([]);

 
 
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=Batman&apikey=fa0c32b6`)
      .then((response) => {
        if (response.data.Search) {
         
          setMovies(response.data.Search);
        
        } else {
          setMovies([]);
          console.log("No movies found");
        }
      })
      .catch((error) => console.log(error));
  }, []);

console.log(movies)











//-------------------------------------------------------------------------------------------------------------------------------- api 


  return (
    <div className='HeaderStoreApp1'>


           <main>
       <swiper-container slides-per-view="1" space-between="20" scrollbar-clickable="true" mousewheel-invert="true">
           
            {api.map((index)=> <swiper-slide>{  <Card2 id  ={index.id} title ={index.nameProduct} img ={index.imgUrlData}/>}</swiper-slide>)}
           
        </swiper-container>

        
    </main>
    




   <hr/>
<div className='topjeux'>  
<div className='class1'>  
<h2>Top Game Free </h2>
<span class="material-symbols-outlined">chevron_right</span>
</div>


<div className='topJeuxcard'>
    
{api.map((index)=>  <XCard title = {index.nameProduct} img = {index.imgUrlData} id ={index.id}/>)}
           
</div>

<hr/>


</div>

<div className='topjeux'>  
<div className='class1'>  
<h2>Top Film Movie Free </h2>
<span class="material-symbols-outlined">chevron_right</span>
</div>


<div className='topJeuxcard'>
    
{movies.map((index)=>  <XCard title = {index.Title} img = {index.Poster} id ={index.imdbID}/>)}
           
</div>

<hr/>


</div>



    </div>
  )
}

export default HeaderStoreApp