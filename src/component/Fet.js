import React from 'react'
import "./Fet.css"
import { Nahdi_Gayth } from '../context/GlobalContext'
const Fet = ({id,title,img}) => {  
 
    //REMOVE_TO_DSKETOP_FOLDER
    const Move = Nahdi_Gayth()
    const HandelWIthButtonReactFcuntion = (e)=>{
         window.location.reload()
         console.log(Move,"This state right now")
         Move.FunctionDispatch({
             type: "REMOVE_TO_DSKETOP_FOLDER",
             test3 : id,
         }) 
    }
    
  return (
       <div className='cardFet'>
         <div className='remove' onClick={HandelWIthButtonReactFcuntion}>X</div>
         <div className='cardFetImg'><img src={img}/></div>
       </div>
  )
}

export default Fet