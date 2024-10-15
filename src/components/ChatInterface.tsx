// components/ChatInterface.tsx

'use client';

import dynamic from 'next/dynamic';
import styles from '../styles/ChatInterface.module.css';

// Dynamic import to avoid SSR issues with 'window' usage in 'deep-chat-react'
const DeepChat = dynamic(
  () => import('deep-chat-react').then((mod) => mod.DeepChat),
  { ssr: false }
);

const ChatInterface = () => {
  // Define the chat styles to create a soothing and professional theme
  const chatStyles = {
    container: {
      borderRadius: '10px',
      border: '1px solid #d1d9e6',
      background: 'linear-gradient(180deg, #f9fbfd 0%, #e3eaf1 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    textInput: {
      styles: {
        container: {
          borderRadius: '25px',
          border: '1px solid #c0c9d5',
          width: '90%',
          margin: '10px auto',
          padding: '5px',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
        },
        text: {
          padding: '10px 20px',
          color: '#333',
          flexGrow: '1',
        },
      },
      placeholder: {
        text: 'How are you feeling today?',
        style: { color: '#a0a7b4' },
      },
    },
    messageStyles: {
      default: {
        shared: {
          bubble: {
            backgroundColor: '#fff',
            marginTop: '10px',
            marginBottom: '10px',
            padding: '15px',
            borderRadius: '15px',
            maxWidth: '80%',
          },
          text: {
            color: '#333',
            fontSize: '16px',
            lineHeight: '1.5',
          },
        },
        user: {
          bubble: {
            backgroundColor: '#d9edf7',
            alignSelf: 'flex-end',
          },
        },
        ai: {
          bubble: {
            backgroundColor: '#e6e9ef',
            alignSelf: 'flex-start',
          },
        },
      },
    },
    submitButtonStyles: {
      // Assuming SubmitButtonStyles is an object with the following properties
      backgroundColor: '#5cb85c',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      marginLeft: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      icon: {
        color: '#fff',
        fontSize: '20px',
      },
    },
  };

  return (
    <div className={styles.chatContainer}>
      <DeepChat
        style={{ ...chatStyles.container, width: '100%', maxWidth: '800px' }}
        introMessage={{ text: 'Hello, I am here to listen. How can I assist you today?' }}
        textInput={chatStyles.textInput}
        messageStyles={chatStyles.messageStyles}
        // submitButtonStyles={chatStyles.submitButtonStyles}
        // Add any other required props here
        // For example, configure the request prop if integrating with a backend
      />
    </div>
  );
};

export default ChatInterface;
