import React from 'react'

export default function Message({ messages }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            background: msg.role === 'user' ? '#fff' : '#e0f7fa',
            borderRadius: '8px',
            padding: '0.75rem',
            marginBottom: '0.5rem',
            textAlign: msg.role === 'user' ? 'right' : 'left'
          }}
        >
          <strong>{msg.role === 'user' ? 'あなた' : '小鳩ちゃん'}：</strong>
          {msg.content}
        </div>
      ))}
    </div>
  )
}
