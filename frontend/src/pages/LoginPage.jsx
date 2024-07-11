import { Input, Card, LoginButton } from "../components/ui"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"



function Loginpage(){

    const { register, handleSubmit, formState: {errors}, } = useForm()
    const {signin} = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit( async (data) => {
       await signin(data)
       navigate("/profile")     
    })


    return (
        <div className="h-[calc(100vh-64px)] flex items-center justify-center">
            
          <div className="flex items-center justify-between w-9/10">           
            <img src="/logoFHD.png" className="w-1/2 h-auto object-contain mr-1" />            
            <Card className="flex flex-col items-center justify-center w-1/2 ">
              <h3 className="text-2xl font-sans text-white mb-6 text-center">LOGIN</h3>
              <form onSubmit={onSubmit} className="w-full flex flex-col items-center" >
                <Input placeholder="Username" {...register("username", {required: true})}/>
                {
                    errors.username && <p className="text-red-600">* Username required</p>
                }
                <Input type="password" placeholder="Password" {...register("password", {required: true})}/>
                {
                    errors.password && <p className="text-red-600">* Password required</p>
                }
                
                <LoginButton>Login</LoginButton>
                
              </form>
            </Card>
          </div>
          
        </div>
        
    );
}

export default Loginpage
