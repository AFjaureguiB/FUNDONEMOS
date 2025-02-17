import {createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";
import Cookie from "js-cookie"


export const AuthContext = createContext()

//Hook para crear el contexto de toda la app 
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors]= useState(null)

    const signin = async (data) => {
        
        try{
            const res = await axios.post("/signin", data)        
            
            setUser (res.data)
            setIsAuth(true)
            return res.data

        }catch (error){

            if(Array.isArray(error.response.data)){                
                return setErrors(error.response.data)
            }

            setErrors([error.response.data.message])
        
        }
    }

    const signup = async (data) => {
        try{
            const res = await axios.post("/signup", data)        
            setUser (res.data)
            setIsAuth(true)
            return res.data

        }catch (error){
            if(Array.isArray(error.response.data)){                
                return setErrors(error.response.data)
            }

            setErrors([error.response.data.message])
        
        }
    }

    useEffect(()=> {
        if(Cookie.get("token")){
            axios.get("/profile")
            .then(res =>{
               setUser(res.data);
               setIsAuth(true);
            })
            .catch(err => {
                console.log(err)
                setUser(null)
                setIsAuth(false)
            })
        }
    },[])
    


    return(<AuthContext.Provider value={{user,isAuth,errors,signup, signin}}>
        {children}
    </AuthContext.Provider>)
}


export default AuthProvider