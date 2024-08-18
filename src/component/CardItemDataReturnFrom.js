import React from 'react'

const CardItemDataReturnFrom = ({class1,img,title}) => {
  return (
    
    <div className='child'>
    <img src={img}/> 
   <h3 className={class1} >{title}</h3>
   
   </div>

  )
}

export default CardItemDataReturnFrom