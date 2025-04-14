"use client"
import {CiUser} from "react-icons/ci"

export default function UserMessage(){
    return(
        <div className="flex w-full my-2 justify-end">
            <div className="flex justify-center p-1 w-8 h-8 border bg-blue-500 rounded-full mr-2">
                <CiUser size={18}/>
            </div>
            <div className="text-left border bg-gray-200 p-2 rounded-lg">
                <div>User</div>
                <p>Hey, I need help with solar quotation</p>
            </div>
        </div>
    )
        
    
}