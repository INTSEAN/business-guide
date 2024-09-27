import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import tipsRouter from './routes/tips.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve static files from client/public (for assets like logo.png, JS files)
app.use('/client', express.static(path.join(__dirname, '../client/public')));

app.get('/tips/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tip.html'));
});

app.use('/tips', tipsRouter);


// Root route
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Business Guide API</h1>');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
