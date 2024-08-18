 



export const reducer = (state,action)=>{
 

     switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user :action.user,
                img : action.img,
                pass:action.pass
            }

         case "PUSCH_TO_BASKET":
             {
                 return{
                     ...state,
                     Basket_Data : [...state.Basket_Data,action.payload]
                 }
             }
   
        case "REMOVE_FROM_LIST":{
                return {
                    ...state,
                     Basket_Data : state.Basket_Data.filter(index=>index.id!=action.test)
                }
            }
        case "ADD_TO_DSKETOP":{
            return {
                ...state,
                Basket_Data_to_desktop : [...state.Basket_Data_to_desktop,action.AddUser]

            }
        }
         
        case "REMOVE_TO_DSKETOP_FOLDER":{
            return {
                ...state,
                Basket_Data_to_desktop :state.Basket_Data_to_desktop.filter((index)=>index.id!==action.test3)

            }
        }


        default :
        return state

     }



}