import { useAuth } from "../context/AuthContext"





function Homepage(){

    const data = useAuth()
    console.log(data)
    return(
        <div>
            <h1 className="font-bold text-black">HomePage</h1>
        </div>
    )
}

export default Homepage