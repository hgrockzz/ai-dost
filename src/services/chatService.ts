import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  response?: string;
  message?: string;
  [key: string]: any;
}

/**
 * Send a chat message to the Ollama API
 * @param message - The user's message
 * @returns Promise with the AI response
 */
export const sendChatMessage = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await axios.post<ChatResponse>(
      `${API_BASE_URL}/chat/ollama`,
      {
        message,
      } as ChatRequest,
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message || 'Failed to send message');
    }
    throw error;
  }
};

