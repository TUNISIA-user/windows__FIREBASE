import React, { useEffect, useState } from 'react'
import { Nahdi_Gayth } from '../context/GlobalContext'
import "./Folder.css"
import CardItemDataReturnFrom from './CardItemDataReturnFrom'
import Fet from './Fet'
import { Link } from 'react-router-dom'
export const Folder = () => {
    const Move = Nahdi_Gayth();
    const pathName = window.location.pathname;
   
       // work api key 

const [input,setInput] =  useState("")

const [folder,setfolder] =  useState([])
useEffect(()=>{
  const res =    Move.Basket_Data_to_desktop.filter((index)=> index.title.toLowerCase().includes(input))
   console.log(res)
  setfolder(res)
 

},[input])
 

   
  return (
    <div>
    <div className='container-folder'>
 

      <ul className='container-folder-list'>
        <li><span class="material-symbols-outlined">arrow_back_ios</span></li>
        <li><span class="material-symbols-outlined">arrow_forward_ios</span></li>
      </ul>
       
      <ul className='container-folder-list'>
         {pathName}
      </ul>
       

       <div className='search-bar-conatiner-folder-list1'>
        <input type='text' className='searchinputBarhere' onChange={(e)=>setInput(e.target.value)} />

       </div>

    </div>



     <div className='Father-of-Container'>


      <div className='child-left-container'>

           <div className='chlid-left-down'>

                 <div className='child'>
                   <img src='/images/pcicon.gif'/> 
                  <h3>This PC</h3>
                  </div>
                   
                  <div className='app-chlid-move-right'>
                     <CardItemDataReturnFrom  class1={"xe"}  img ={"/images/icons8-3d-object-48.png"} title={"3D Objects"}/>
                     <br/>
                    
                     <Link to="/Home_user1" style={{textDecoration:"none",color:"black"}}>   <CardItemDataReturnFrom  class1={"xe"} img ={"/images/icons8-desktop-50.png"} title={"PC"}/>    </Link>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"}  img ={"/images/icons8-document-48.png"} title={"Documents"}/>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"} img ={"/images/icons8-download-48.png"} title={"Downloads"}/>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"}   img ={"/images/icons8-music-50.png"} title={"Muisc"}/>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"}   img ={"/images/icons8-videos-64.png"} title={"Video"}/>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"}   img ={"/images/icons8-ssd-50.png"} title={"Local Disk (C:)"}/>
                     <br/>
                     <CardItemDataReturnFrom    class1={"xe"}   img ={"images/icons8-hdd-50.png"} title={"Local Disk (D:)"}/>
                     
                  </div>
           </div>
        
      </div>

      <div className='child-right-container'>

      <div className='child-right-container-inner-icon'>

        
         {folder.map((index)=> <Fet id ={index.id} title ={index.title}  img ={index.img}/>)} 


      </div>


      </div>


      </div>











    </div>
  )
}
