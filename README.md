# 🕊️ kobato-gpt

ミラクル小鳩ちゃんの雑談＆用語解説チャットルームです。  
React + Vite + OpenAI + RAG によるローカル動作型 GPT UI。

---

## 📁 構成ファイル一覧

| パス                        | 説明                                         |
|-----------------------------|----------------------------------------------|
| `/index.html`               | HTMLエントリーポイント（Vite経由）           |
| `/vite.config.js`           | Vite設定ファイル                             |
| `/package.json`             | 依存モジュール一覧                           |
| `/src/main.jsx`             | Reactアプリのエントリーポイント              |
| `/src/App.jsx`              | アプリ本体の構成                            |
| `/src/components/ChatBox.jsx` | 入力フォーム（送信用）                     |
| `/src/components/Message.jsx` | 表示部分（チャットバブル）                 |
| `/src/api/openai.js`        | OpenAI API呼び出しロジック                   |
| `/src/rag/knowledge.json`   | 小鳩ちゃんが参照する知識ベース               |
| `/src/rag/searchRag.js`     | RAG検索処理（Fuse.js による曖昧検索）        |
| `.gitignore`                | Git追跡から除外するファイル設定（例: `.env.local`） |
| `.env.local`（除外対象）     | OpenAIキーなど秘密設定（**絶対非公開**）     |

---

## 🚀 起動方法（ローカル開発）

```bash
# 依存をインストール
npm install

# .env.local を作成してAPIキー設定
echo "VITE_OPENAI_API_KEY=sk-xxxxx" > .env.local

# サーバー起動
npm run dev
