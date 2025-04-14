"use client";
import { useState } from "react";
import {TbMessageChatbot} from "react-icons/tb"
import BotMessage from "./ui/bot-message";



export  default function CustomChatBot() {
    const [showChat, setShowChat] = useState(false);
    return(
        <div className=" w-screen h-screen">
            <TbMessageChatbot 
                size={64} 
                onClick={()=>setShowChat(!showChat)}
                className="text-blue-600 fixed bottom-6 right-6 cursor-pointer hover:scale-110 transition-transform duration-200" 
            />
            {
                showChat && (
                    <div className="fixed right-1 bottom-[calc(4rem+1.5rem)] hover:cursor-pointer p-5 shadow-md shadow-blue-600 h-[300px] w-[500px] bg-white">
                        <div className="flex flex-col h-full">
                           {/* Chatbot header */} 
                            <div>
                            <h2 className="font-semibold text-lg tracking-tight">Chatbot </h2>
                            <p>Davis and Shirtliff Ai</p>
                            </div>

                            {/* Chatbot Container */}
                            <div className=" flex flex-col flex-1 item-center p-2 mt-5 overflow-y-auto">
                                <div>Messages...</div>
                                </div>
                        </div>
                        {/* Message Input field */}
                        <BotMessage/>
                    </div>
                )

            }
        </div>
    )
}