import { createContext, useEffect, useState } from "react";
export const  StoreContext=createContext(null);
import axios from "axios";

const StoreContextProvider=(props)=>{
    const url="https://mern-backend-tdk9.onrender.com/";
    const [token,setToken]=useState("")
    console.log('token is:')
    console.log(token);

    


    const loadCartData=async (token)=>{
        console.log('im a loadcartdata');
        const response=await axios.post(url+"/api/cart/add",{},{headers:{token}});
        console.log(response)
    
    }
    
        async function loadData() {
            
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                console.log('im in loaddaa')
                console.log(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }    
           
        }
        
    useEffect(()=>{
        loadData()

    },[])        
    

    const contextValue={
        token,
        url,
        setToken


    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider