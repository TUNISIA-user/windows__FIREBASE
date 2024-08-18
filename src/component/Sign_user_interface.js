import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign_user_interface.css";
 

const Login_user_interface = () => {
  const Navigate = useNavigate()
 
  const HandelThisbuttonToFaceMetoLoginPage = ()=>{
    Navigate("/Login")
  }


  const textRef = useRef(null);
  
  useEffect(() => {
    const text = 'NAHDI GHAITH';  
    let index = 0;
    const speed = 100;  

    const type = () => {
      if (index < text.length) {
        textRef.current.textContent += text[index];
        index++;
        setTimeout(type, speed);
      }
    };

    type();
  }, []);

  return (
    <div className='Login_user_interface' style={{background:"black"}}>
      <div className='Login_user_interface_Icon'>
        <img src="/images/user.png" alt="user" /> {/* Ensure the path is correct */}
      </div>
      <div className='Login_user_interface_user_name' ref={textRef}></div> {/* Remove static text */}
      <div className='Login_user_interface_sign_in'>
        <button onClick={HandelThisbuttonToFaceMetoLoginPage}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Login_user_interface;
