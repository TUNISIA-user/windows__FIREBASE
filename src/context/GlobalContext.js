import { useReducer,createContext,useContext,useEffect } from "react";
import { reducer } from "./reducer";



const inititaleState ={
    user : localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
    img : localStorage.getItem("userimg")?JSON.parse(localStorage.getItem("userimg")):null,
    pass:null,
    Basket_Data :localStorage.getItem("Basket_Data")?JSON.parse(localStorage.getItem("Basket_Data")):[],
    Basket_Data_to_desktop:localStorage.getItem("Basket_Data_to_desktop")?JSON.parse(localStorage.getItem("Basket_Data_to_desktop")):[],
   
}


export const GlobalContext = createContext(inititaleState)


const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,inititaleState)
    // here useEffect for state 
    useEffect(() => {
        console.log("State updated:", state);
        localStorage.setItem("user",JSON.stringify(state.user))
        localStorage.setItem("Basket_Data",JSON.stringify(state.Basket_Data))
        localStorage.setItem("Basket_Data_to_desktop",JSON.stringify(state.Basket_Data_to_desktop))
        localStorage.setItem("userimg",JSON.stringify(state.img))
        
    }, [state]);

    return(
        <GlobalContext.Provider
        value={{
            user : state.user,
            img : state.img,
            pass:state.pass,
            Basket_Data :state.Basket_Data,
            Basket_Data_to_desktop : state.Basket_Data_to_desktop,
            FunctionDispatch:dispatch
        }}
        >

            {children}
        </GlobalContext.Provider>
    )
 }

 export default ContextProvider


 export const Nahdi_Gayth =()=>{
    return useContext(GlobalContext)
 }