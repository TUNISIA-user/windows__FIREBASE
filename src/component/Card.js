import React from 'react'

const Card = ({title,img}) => {
  return (
    
    <div className='card1'>
    <div className='card1-img'><img src={img}/> </div>
    <div className='card1-img-title'>{title}</div>
  </div>
  )
}

export default Card