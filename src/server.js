require('dotenv').config();
const connect = require('./config/database.js');
const express = require('express');
const index = require('./routes/index.js');
const PORT = process.env.PORT || 3334;
const app = express();

app.use(express.json());
app.use('/api', index);

connect(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
