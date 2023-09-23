import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
