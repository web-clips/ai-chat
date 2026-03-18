# 🤖 AI Chat Assistant

Fullstack AI чат-приложение с использованием OpenAI API.  
Пользователь может отправлять сообщения и получать ответы от AI в реальном времени.

---

## 🚀 Функционал

- 💬 Чат с AI
- ⚡ Ответы в реальном времени
- 🧠 Интеграция с OpenAI API
- 🎤 UI с компонентами (ChatInput, MessageList, MicButton)
- 🔄 Автоскролл сообщений
- ❌ Обработка ошибок сервера

---

## 🛠️ Технологии


### Frontend:
- React
- Tailwind CSS
- Fetch API

### Backend:
- Node.js
- Express

### AI:
- Groq API (fast LLM inference)
- LLaMA / Mixtral models

---

## 📂 Структура проекта
task-manager/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ui/
│ │ ├── hooks/
│ │ ├── pages/
│ │ └── services/
│
├── server/ # Node.js backend
│ ├── controllers/
│ ├── routes/
│ ├── services/
│ └── server.js


## ⚙️ Установка и запуск


### 1. Клонировать репозиторий

```bash
git clone https://github.com/your-username/ai-chat.git
cd ai-assistant
```
### 2.🔹 Backend

```bash
cd server
npm install
```

------- Запуск

```bash
node server.js
```

### 4. 🔹 Frontend

```bash
cd client
npm install
npm run dev
```

🔗 Backend
Backend по умолчанию работает на:
http://localhost:5000

### 5. 🌐 API
POST /chat

Endpoint:
http://localhost:5000/chat

# Пример запроса:

```json
{"message": "Привет"}
```

# Ответ:

```json
{"reply": "Привет! Чем могу помочь?"}
```


### 📞 Контакты

Telegram: @vasvbi
Email: azamatmaxout@gmail.com

