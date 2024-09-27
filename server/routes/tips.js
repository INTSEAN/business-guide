// server/routes/tips.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import tipData from '../data/tips.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET route to send all tips data
router.get('/', (req, res) => {
  res.status(200).json(tipData);
});

// GET route to serve tip detail page
router.get('/:tipId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/tip.html'));
});

export default router;
