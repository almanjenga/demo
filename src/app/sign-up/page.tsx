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
    <div className="h-full flex items-center justify-center bg-[#365dc9f6]">
        <Card className = "md:h-auto w-[80%] sm:w-[420] p-4 sm:p-8">
            <CardHeader>
                <CardTitle className = "text-center" >
                    Sign Up
                    </CardTitle>
                    <CardDescription className = "text-sm text-center text-accent-foreground">
                        Use email or service, to create account

                    </CardDescription>
                
            </CardHeader>
        

            
        </Card>
    </div>
)
}

export default SignUp