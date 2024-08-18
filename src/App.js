import "./styles.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Sign_user_interface from "./component/Sign_user_interface";
import LoginFireBase from "./component/LoginFireBase1";
import ContextProvider, { Nahdi_Gayth } from "./context/GlobalContext";
import { auth } from "./firebase123";
import HomeUser from "./component/HomeUser";
import HomeUser1 from "./component/HomeUser1";
import Store from "./component/Store";
import Error1 from "./component/Error1";
import { Folder } from "./component/Folder";
const App = () => {
  // const { FunctionDispatch } = Nahdi_Gayth(); // Access FunctionDispatch from context

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     FunctionDispatch({
  //       type: "SET_USER",
  //       user: authUser,
  //     });
  //   });

  //   // Clean up subscription on component unmount
  //   return () => unsubscribe();
  // }, [FunctionDispatch]);

  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="*" element={<><Error1/></>} />
          <Route path="/Sign-user-interface" element={<Sign_user_interface />} />
          <Route path="/" element={<Sign_user_interface />} />
          
          <Route path="/Login" element={<Login />} />
          <Route path="/LoginFireBase1" element={<LoginFireBase />} />
          <Route path="/Home_user" element={<HomeUser/>}/>
          <Route path="/Home_user1" element={<HomeUser1/>}/>
          <Route path="/Store" element={<Store/>}/>
          <Route path="/Folder" element={<Folder/>}/>
          
        </Routes>
      </ContextProvider>
    </div>
  );
};

export default App;
