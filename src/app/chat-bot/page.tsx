import React from 'react';
import CustomChatBot from '../../../components/chat-bot/CustomChatBot';

const ChatBot = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4">
            <div className="bg-white w-full max-w-4xl p-10 rounded-3xl shadow-lg text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Chatbot</h1>
                <CustomChatBot/>
            </div>
        </div>
    );
};

export default ChatBot;
