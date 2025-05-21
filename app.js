const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Quran Explorer backend is running.');
});

app.post('/api/save', async (req, res) => {
  const { ayahText, surah, translation } = req.body;

  try {
    const { data, error } = await supabase
      .from('SavedAyahs')
      .insert([{ ayahText, surah, translation }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

