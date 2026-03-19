import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.routes.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})