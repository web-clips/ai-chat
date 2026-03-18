<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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

Frontend: https://your-app.vercel.app
Backend: https://your-api.onrender.com


### 📞 Контакты

Telegram: @yourusername
Email: your@email.com






>>>>>>> e01143eab2ed304db8c56f8634ff3b87457668e0
