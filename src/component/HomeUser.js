import React, { useState, useEffect } from 'react';
import './HomeUser.css'; // Ensure this is imported first
import Spiner from './Spiner';
import ScreenHome from './ScreenHome';
import { useNavigate } from 'react-router-dom';
const HomeUser = () => {
  const [open, setOpen] = useState("block");
  const Navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen("none");
      Navigate("/Home_user1")
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, []);

  return (
    <>
      <div className='container-home-user'>
        <Spiner open={open} />
         
      </div>  
    </>
  );
}

export default HomeUser;
