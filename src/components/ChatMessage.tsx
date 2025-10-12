import React from 'react';

export interface Message {
    id: string;
    role: 'user' | 'ai';
    content: string;
    timestamp?: string;
}

interface ChatMessageProps {
    message: Message;
    showAvatar?: boolean;
    showName?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
    message,
    showAvatar = true,
    showName = false
}) => {
    const isUser = message.role === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end max-w-[80%]`}>
                {/* Avatar */}
                {showAvatar && !isUser && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 mr-2 mb-1 flex items-center justify-center">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-600"
                        >
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="12"
                                cy="7"
                                r="4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )}

                {/* Message Container */}
                <div className={`${isUser ? 'ml-2' : 'mr-2'}`}>
                    {/* Name Label */}
                    {showName && (
                        <div className={`text-sm text-gray-600 mb-1 ${isUser ? 'text-right' : 'text-left'}`}>
                            {isUser ? 'You' : 'AI Dost'}
                        </div>
                    )}

                    {/* Message Bubble */}
                    <div className={`relative px-4 py-2 rounded-xl ${isUser
                        ? 'bg-primary text-white rounded-br-sm'
                        : 'bg-gray-200 text-black rounded-bl-sm'
                        }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
