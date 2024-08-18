import React from 'react'
import Card2 from './Card2';
import { Swiper, SwiperSlide } from 'swiper/react';
import Genreateid from './Genreateid';
import { useNavigate } from 'react-router-dom';
import { Nahdi_Gayth } from '../context/GlobalContext';
import HeaderStore from './HeaderStore';
import RightStoreBanner from './RightStoreBanner';
import HeaderStoreApp from './HeaderStoreApp';
const Store = () => {

  const Nav = useNavigate()
    const Hande = (e)=>{
      e.preventDefault()
      Nav("/Home_user1")

    
    }

 

    const api = [
        { id: Genreateid(), nameProduct: "exel", imgUrlData: "images/exel.png" },
        { id: Genreateid(), nameProduct: "microsft", imgUrlData: "images/microsft.png" },
        { id: Genreateid(), nameProduct: "micrsoftStore", imgUrlData: "images/micrsoftStore.png" },
        { id: Genreateid(), nameProduct: "spotify", imgUrlData: "images/spotify.png" },
        { id: Genreateid(), nameProduct: "powerPoint", imgUrlData: "images/powerPoint.png" },
        { id: Genreateid(), nameProduct: "gmail", imgUrlData: "images/gmail.png" },
        { id: Genreateid(), nameProduct: "outlook", imgUrlData: "images/4375032_logo_outlook_icon.png" },
        { id: Genreateid(), nameProduct: "exel", imgUrlData: "images/exel.png" },
        { id: Genreateid(), nameProduct: "microsft", imgUrlData: "images/microsft.png" },
        { id: Genreateid(), nameProduct: "micrsoftStore", imgUrlData: "images/micrsoftStore.png" },
        { id: Genreateid(), nameProduct: "spotify", imgUrlData: "images/spotify.png" },
        { id: Genreateid(), nameProduct: "powerPoint", imgUrlData: "images/powerPoint.png" },
        { id: Genreateid(), nameProduct: "gmail", imgUrlData: "images/gmail.png" },
        { id: Genreateid(), nameProduct: "outlook", imgUrlData: "images/4375032_logo_outlook_icon.png" }
      ];

      
      

      
  return (
    <div className='APP-containert-pres'>


      <div className='app-container-pres-header'>
          <RightStoreBanner/>
         <HeaderStore/>
         <HeaderStoreApp api = {api}/>
   
      </div>
   
   
    </div>  
  )
}

export default Store