import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/sample', express.static(path.join(__dirname, 'sample')));

app.get('/health', (req, res) => {
  res.json({ ok: true, version: '0.1.0-score-driven' });
});

app.listen(port, () => {
  console.log(`琴乐启蒙 AI 导师 · 乐谱驱动测试版 running at http://localhost:${port}`);
});
