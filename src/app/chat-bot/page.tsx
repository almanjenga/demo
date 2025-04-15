"use client";

import { useState } from "react";
import BotMessage from "../../../components/chat-bot/ui/bot-message";
import ChatInput from "../../../components/chat-bot/ui/chat-input";
import UserMessage from "../../../components/chat-bot/ui/user-message";

interface Message {
  type: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (userText: string) => {
    // Add user message to chat
    setMessages((prev) => [...prev, { type: "user", text: userText }]);

    try {
      const response = await fetch("http://localhost:8000/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app_name: "SWH",
          user_id: "u_123",
          session_id: "s_123",
          new_message: {
            role: "user",
            parts: [{ text: userText }],
          },
        }),
      });

      const data = await response.json();

      // If the bot reply is in a nested structure, adapt this:
      const botReply = data.reply || data.response || "No response from bot.";

      setMessages((prev) => [...prev, { type: "bot", text: botReply }]);
    } catch (error) {
      console.error("API error:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Sorry, there was an error." },
      ]);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col pt-20">
      {/* Chatbot Header */}
      <div className="bg-blue-600 text-white px-6 py-4 shadow-md">
        <h2 className="text-2xl font-semibold">
          Davis & Shirtliff AI Solar Hot Water Assistant
        </h2>
      </div>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) =>
          msg.type === "user" ? (
            <UserMessage key={idx} message={msg.text} />
          ) : (
            <BotMessage key={idx} message={msg.text} />
          )
        )}
      </div>

      {/* Chat input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
