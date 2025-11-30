import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import ChatMessage, { type Message } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { sendChatMessage } from "../services/chatService";

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "ai",
      content: "Hey there! Ready to chat and explore some fun topics together? ✨",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);
    const loadingMessageId = (Date.now() + 1).toString();
    const loadingMessage: Message = {
      id: loadingMessageId,
      role: "ai",
      content: "...",
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      // Call the API
      const response = await sendChatMessage(content);

      // Extract response text (handle different possible response structures)
      const aiResponse = response.response || response.message || JSON.stringify(response);

      // Remove loading message and add actual response
      setMessages((prev) => prev.map((msg) => (msg.id === loadingMessageId ? { ...msg, content: aiResponse } : msg)));
    } catch (error) {
      // Remove loading message and add error message
      const errorMessage = error instanceof Error ? error.message : "Failed to get response";
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingMessageId ? { ...msg, content: `Sorry Bro, Code Phatt Gya! \nError: ${errorMessage}` } : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachFile = () => {
    // TODO: Implement file attachment functionality
    console.log("Attach file clicked");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <div className="h-screen flex flex-col bg-background-light">
      {/* Header */}
      <ChatHeader onBackClick={handleBackClick} onSettingsClick={handleSettingsClick} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-white">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              showName={index === 0 || messages[index - 1]?.role !== message.role}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} onAttachFile={handleAttachFile} disabled={isLoading} />
    </div>
  );
};

export default Chat;
