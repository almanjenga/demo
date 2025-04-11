"use client"
import { CustomButton } from "../../../components"
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle
} from "../../../components/card" 
import Separator from "../../../components/separator"
import Input from "../../../components/input"
const SignUp = () => {
    return (
    <div className="h-full flex items-center justify-center bg-blue-100">
        <Card className = "md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
                <CardTitle className = "text-center" >
                    Sign Up
                    </CardTitle>
                    <CardDescription className = "text-sm text-center text-accent-foreground">
                        Use email or service, to create account

                    </CardDescription>
                
            </CardHeader>
            <CardContent className = "px-2 sm:px-6">
                <form action= "" className="space-y-3">
                    <Input
                    type="text"
                    disabled ={false}
                    placeholder="Full name"
                    value = {""}
                    onChange={()=>{}}
                    required
                    />
                    <Input
                    type="email"
                    disabled ={false}
                    placeholder="Email"
                    value = {""}
                    onChange={()=>{}}
                    required 
                    />
                    <Input
                    type="password"
                    disabled ={false}
                    placeholder="Password"
                    value = {""}
                    onChange={()=>{}}
                    required 
                    />
                    <Input
                    type="password"
                    disabled ={false}
                    placeholder="Confirm password"
                    value = {""}
                    onChange={()=>{}}
                    required 
                    />
                    <CustomButton
                    title="Continue"
                    containerStyles="w-full bg-blue-600 text-white rounded-full px-2 py-3 hover:bg-blue-700 transition"
                    btnType="submit"
                    />

                </form>
                <Separator/>
                <div className = "flex my-2 justify-evenly mx-auto items-center">
                    <CustomButton
                    title=""
                    containerStyles="bg-state-300 hover:bg-slate-400 hover:scale-100"
                    handleClick={() =>{}}
                    />
                </div>

            </CardContent>
        

            
        </Card>
    </div>
)
}

export default SignUp