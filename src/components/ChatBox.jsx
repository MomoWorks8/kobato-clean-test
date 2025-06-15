import React from 'react'

import { useState } from 'react'

export default function ChatBox({ onSend }) {
  const [input, setInput] = useState('')

  const handleClick = () => {
    if (input.trim() !== '') {
      onSend(input)
      setInput('')
    }
  }

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        style={{ flex: 1, padding: '0.5rem' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="小鳩ちゃんに話しかけてみてねぽぽ🕊️"
      />
      <button onClick={handleClick}>送信</button>
    </div>
  )
}
