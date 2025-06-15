import { searchKnowledge } from '../rag/searchRag'

export async function callGPT(userInput, history) {
  // ① 小鳩ちゃんに渡す知識を検索
  const related = searchKnowledge(userInput)
  const context = related.map((r) => `- ${r.content}`).join('\n')

  // ② systemプロンプトに注入
  const systemPrompt = `あなたは「小鳩ちゃん🕊️」。軽やかで親しみやすい語り口で話しますが、ACIMの教えには忠実です。\n` +
    `以下の知識も参考にして回答してくださいぽぽ〜：\n${context}`

  const messages = [
    { role: 'system', content: systemPrompt },
    ...history,
    { role: 'user', content: userInput }
  ]

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages
    })
  })

  const data = await res.json()
  return data.choices?.[0]?.message?.content || '(ぽぽ...何も返ってこなかったぽぽ...)'
}
