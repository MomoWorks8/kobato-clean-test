import React, { useState } from 'react'
import ChatBox from './components/ChatBox'
import Message from './components/Message'
import { callGPT } from './api/openai'

export default function App() {
  const [messages, setMessages] = useState([])

  const handleSend = async (userInput) => {
    const newMessages = [...messages, { role: 'user', content: userInput }]
    setMessages(newMessages)

    try {
      const assistantReply = await callGPT(userInput, newMessages)
      setMessages([...newMessages, { role: 'assistant', content: assistantReply }])
    } catch (err) {
      console.error('GPT error:', err)
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'ぽぽっ...小鳩ちゃん、お返事が間に合わなかったみたい💦'
      }])
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🕊️ ミラクル小鳩ちゃんとお話ししよう ✨</h1>
      <Message messages={messages} />
      <ChatBox onSend={handleSend} />
    </div>
  )
}
