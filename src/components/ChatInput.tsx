import React, { useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    onAttachFile?: () => void;
    placeholder?: string;
    disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
    onSendMessage,
    onAttachFile,
    placeholder = "Type a message...",
    disabled = false
}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    //   const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setMessage(e.target.value);
    //   };

    return (
        <div className="bg-white px-4 py-3 border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex items-end bg-gray-100 rounded-xl px-4 py-2 min-h-[48px] max-h-[144px] overflow-hidden">
                {/* Attachment Button */}
                <button
                    type="button"
                    onClick={onAttachFile}
                    disabled={disabled}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50 mb-1 flex-shrink-0"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-500"
                    >
                        <path
                            d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59722 21.9983 8.005 21.9983C6.41278 21.9983 4.88583 21.3658 3.76 20.24C2.63417 19.1142 2.00167 17.5872 2.00167 15.995C2.00167 14.4028 2.63417 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80944 14.7186 1.38787 15.785 1.38787C16.8514 1.38787 17.8694 1.80944 18.62 2.56C19.3706 3.31056 19.7921 4.32856 19.7921 5.395C19.7921 6.46144 19.3706 7.47944 18.62 8.23L9.41 17.42C9.03472 17.7953 8.53127 18.0083 8.005 18.0083C7.47873 18.0083 6.97528 17.7953 6.6 17.42C6.22472 17.0447 6.01167 16.5413 6.01167 16.015C6.01167 15.4887 6.22472 14.9853 6.6 14.61L15.07 6.14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Textarea Field */}
                <textarea
                    id="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`${styles.textarea} focus:ring-0`}
                />

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={!message.trim() || disabled}
                    className="bg-primary text-white rounded-full p-2 ml-2 mb-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 flex-shrink-0 mb-1"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 2L11 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22 2L15 22L11 13L2 9L22 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
