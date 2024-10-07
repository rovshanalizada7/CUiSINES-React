import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const globalContext = createContext();


export const GlobalProvider = ({children}) => {

  
  const [allData,setAllData] = useState([]);
  const [loading,setLoading] = useState(true)
  const [mode,setMode] = useState(false)

  useEffect(() => {
   const getApi = async () => {
    try {
        await axios.get(" https://dummyjson.com/recipe")
        .then(res => setAllData(res.data.recipes),
        setLoading(false)
        )
    } catch (err) {
        console.log(err);
        setLoading(true)
    }
   }
   getApi()
   },[])

  return <globalContext.Provider value={{allData,mode,setMode,loading}} >{children}</globalContext.Provider>
  
}

export default GlobalProvider