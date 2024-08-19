import React, { useState } from 'react' 
import "./LoginFireBase1.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase123"
import { Nahdi_Gayth } from '../context/GlobalContext';
const LoginFireBase1 = () => {
  const Navigate = useNavigate()
    
  const Move = Nahdi_Gayth()
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);

 console.log(email,password)

 const handleButtonCreateReact = (event)=>{

    event.preventDefault()
  createUserWithEmailAndPassword(auth,email,password)
  .then((auther)=>{
    auther && Navigate("/Home_user")
    setemail("")          //  this for clean this input
    setpassword("")
  })

  .catch((eroor)=>{
    console.log("error is ",eroor)
  })
  Move.FunctionDispatch({
    type:"SET_USER",
    user  : email,
    img : fileURL,
    pass:password
    
  })

 console.log(Move.user,Move.img,"<==============")



 }


 const handleButtonCreateReact1 = async (event) => {
  event.preventDefault();
  
  try {
    const auther = await signInWithEmailAndPassword(auth, email, password);
    
    if (auther) {
      Move.FunctionDispatch({
        type: "SET_USER",
        user: email,
        img: fileURL,
        pass: password
      });
      
      // Clear inputs after dispatch
      setemail("");
      setpassword("");
      
      // Navigate after dispatch
      Navigate("/Home_user");
    }
  } catch (error) {
    console.log("Error is", error);
  }
};








 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setFileURL(url);
      
    }

   
  };

  return (
    <>


 

    

      <div id="Container">
    <form className="form">
<div id="login-lable">Login</div>
<input className="form-content" type="text" placeholder="email"  onChange={(e)=>{setemail(e.target.value)}}/>
<input className="form-content" type="password" placeholder="PassWord"  onChange={(e)=>{setpassword(e.target.value)}}/>
    







      <div className="container1">
        <div className="header">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
          <p>Browse File to upload!</p>
        </div>
        <label htmlFor="file" className="footer">
          <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
              <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
            </g>
          </svg>
          <p>{selectedFile ? selectedFile.name : "No file selected"}</p>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#000000" strokeWidth="2"></path>
              <path d="M19.5 5H4.5" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#000000" strokeWidth="2"></path>
            </g>
          </svg>
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
 

    <button    onClick={handleButtonCreateReact1} >Sign in 1 </button>
    <button onClick={handleButtonCreateReact} >Create Acount </button>
    </form>


  
    <div id="rays">
      <svg
        fill="none"
        viewBox="0 0 299 152"
        height="9em"
        width="18em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#paint0_linear_8_3)"
          d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="12.1981"
            x2="150.12"
            y1="152"
            x1="149.5"
            id="paint0_linear_8_3"
          >
            <stop stop-color="#00E0FF"></stop>
            <stop stop-opacity="0" stop-color="#65EDFF" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  
    <div id="emiter">
      <svg
        fill="none"
        viewBox="0 0 160 61"
        height="61"
        width="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_1_38)">
          <path
            fill="#2B2B2B"
            d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </g>
        <ellipse
          fill="url(#paint0_radial_1_38)"
          ry="4.80773"
          rx="28.3956"
          cy="17.4236"
          cx="80"
        ></ellipse>
        <g filter="url(#filter1_i_1_38)">
          <path
            fill="#323232"
            d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </g>
        <g filter="url(#filter2_di_1_38)">
          <path
            fill="#378BA6"
            d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="45.5002"
            width="160"
            y="15.4996"
            x="0"
            id="filter0_di_1_38"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite operator="out" in2="hardAlpha"></feComposite>
            <feColorMatrix
              values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_1_38"
              in2="BackgroundImageFix"
              mode="normal"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_1_38"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="8"></feGaussianBlur>
            <feComposite
              k3="1"
              k2="-1"
              operator="arithmetic"
              in2="hardAlpha"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect2_innerShadow_1_38"
              in2="shape"
              mode="normal"
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="25.0002"
            width="152"
            y="3"
            x="4"
            id="filter1_i_1_38"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feBlend
              result="shape"
              in2="BackgroundImageFix"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feMorphology
              result="effect1_innerShadow_1_38"
              in="SourceAlpha"
              operator="erode"
              radius="3"
            ></feMorphology>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
            <feComposite
              k3="1"
              k2="-1"
              operator="arithmetic"
              in2="hardAlpha"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_innerShadow_1_38"
              in2="shape"
              mode="normal"
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="26.7583"
            width="78.4615"
            y="0.692139"
            x="40.7693"
            id="filter2_di_1_38"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feMorphology
              result="effect1_dropShadow_1_38"
              in="SourceAlpha"
              operator="dilate"
              radius="2"
            ></feMorphology>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite operator="out" in2="hardAlpha"></feComposite>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_1_38"
              in2="BackgroundImageFix"
              mode="color-dodge"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_1_38"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feMorphology
              result="effect2_innerShadow_1_38"
              in="SourceAlpha"
              operator="erode"
              radius="1"
            ></feMorphology>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite
              k3="1"
              k2="-1"
              operator="arithmetic"
              in2="hardAlpha"
            ></feComposite>
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect2_innerShadow_1_38"
              in2="shape"
              mode="normal"
            ></feBlend>
          </filter>
          <radialGradient
            gradientTransform="translate(80 17.4236) rotate(90) scale(6.25004 36.9143)"
            gradientUnits="userSpaceOnUse"
            r="1"
            cy="0"
            cx="0"
            id="paint0_radial_1_38"
          >
            <stop stop-color="#00FFF0"></stop>
            <stop stop-color="#001AFF" offset="0.901042"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>










    </>
  );
};

export default LoginFireBase1;
