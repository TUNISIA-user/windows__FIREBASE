import React from 'react'
import "./BASKET.css"
import { Nahdi_Gayth } from '../context/GlobalContext'

const BASKET_DATA = ({id,img,title}) => {
  console.log(id,img,title)
  const Move  = Nahdi_Gayth();

  const handelRemove = ()=>{
   Move.FunctionDispatch({
    type :  "REMOVE_FROM_LIST",
    test  : id,
   })
  }
  return ( 

 
        
        

        <div className='cardhelp'>
            <p className='remove' onClick={handelRemove} >X</p>
         <div className='img-card'><img src={img}/></div>
         <div className='title'><h4>{title}</h4></div>
        </div>
  


  )
}

export default BASKET_DATA