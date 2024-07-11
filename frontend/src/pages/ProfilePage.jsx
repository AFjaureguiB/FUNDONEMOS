import { useAuth } from "../context/AuthContext"

function Profilepage(){
    const {user}= useAuth()


    return(
        <div>
            {JSON.stringify(user, null, 2)}
        </div>
    )
}

export default Profilepage