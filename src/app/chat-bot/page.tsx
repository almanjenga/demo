    "use client";

import BotMessage from "../../../components/chat-bot/ui/bot-message";
import ChatInput from "../../../components/chat-bot/ui/chat-input";
import UserMessage from "../../../components/chat-bot/ui/user-message";

    export default function ChatBot() {
    return (
        <div className="w-screen h-screen bg-gray-100 flex flex-col pt-20">
        {/* Chatbot Header */}
        <div className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <h2 className="text-2xl font-semibold">Davis & Shirtliff AI Solar Hot Water Assistant</h2>
            
        </div>

        {/* Chat container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Bot message */}
        <BotMessage/>

            {/* User message */}
            <UserMessage/>
        
        </div>
        {/* Chat input */}
        <ChatInput/>
        </div>
    );
    }
