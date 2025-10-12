import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from './ChatHeader';
import ChatMessage, { type Message } from './ChatMessage';
import ChatInput from './ChatInput';

const Chat: React.FC = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'ai',
            content: "Hey there! Ready to chat and explore some fun topics together? ✨",
        },
        {
            id: '2',
            role: 'user',
            content: "Absolutely! What's on your mind?",
        },
        {
            id: '3',
            role: 'ai',
            content: "I'm thinking about the latest trends in sustainable fashion. Have you heard about upcycling? ♻️",
        },
        {
            id: '4',
            role: 'user',
            content: "Yeah, I've seen some cool designs made from recycled materials. It's pretty impressive!",
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleAttachFile = () => {
        // TODO: Implement file attachment functionality
        console.log('Attach file clicked');
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSettingsClick = () => {
        navigate('/settings');
    };

    return (
        <div className="h-screen flex flex-col bg-background-light">
            {/* Header */}
            <ChatHeader
                onBackClick={handleBackClick}
                onSettingsClick={handleSettingsClick}
            />

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
            <ChatInput
                onSendMessage={handleSendMessage}
                onAttachFile={handleAttachFile}
            />
        </div>
    );
};

export default Chat;
