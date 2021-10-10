import React, {useReducer,useContext } from "react";
import reducer from "./reducer"

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const initialState={
        userName:"",
        email:"",
        profileImg:"",
        auralTestResult:{},
        visionTestResult:{},
        previousAuralTestResults:[],
        previousVisionTestResults:[],
        authenticated:"",
        isDropDownOpen:false
    }
  const [state, dispatch] = useReducer(reducer, initialState);
  const value={...state,dispatch}
  return <AppContext.Provider value={{...value}}>
            {children}
         </AppContext.Provider>;
};

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppProvider};