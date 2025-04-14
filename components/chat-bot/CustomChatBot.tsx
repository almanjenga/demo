"use client";
import { useState } from "react";
import {TbMessageChatbot} from "react-icons/tb"



export  default function CustomChatBot() {
    const [showChat, setShowChat] = useState(true);
    return(
        <div className="w-screen h-screen">
            <TbMessageChatbot 
                size={64} 
                className="text-blue-600 fixed bottom-6 right-6 cursor-pointer hover:scale-110 transition-transform duration-200" 
            />
            {
                showChat && (
                    <div>
                        <div>
                           {/* Chatbot header */} 
                            <div>
                            <h2>Chatbot </h2>
                            <p>Davis and Shirtliff Ai</p>
                            </div>
                        </div>
                    </div>
                )

            }
        </div>
    )
}