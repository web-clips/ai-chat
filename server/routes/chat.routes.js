import express from 'express';

import { chat } from '../controllers/chat.controller.js';

const router = express.Router();

router.post("/", chat);

router.get("/", (req, res) => {
    res.send("API работает");
});
export default router;