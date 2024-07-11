import {createContext, useContext, useState} from "react";
import axios from "axios";

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
        
        const res = await axios.post("http://localhost:3000/api/signin", data, {withCredentials: true})        
        console.log(res.data) 
        setUser (res.data)
    }

    const signup = async (data) => {
        const res = await axios.post("http://localhost:3000/api/signup", data, {withCredentials: true})
        console.log(res.data)
        setUser (res.data)
    }


    return <AuthContext.Provider value={{user,isAuth,errors,signup, signin}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider