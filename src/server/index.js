
const express = require('express');

// Setup
const app = express();
app.use(express.static('dist'));

// API
app.get('/api/getUsername', (req, res) => res.send({ username: 'Lee' }));

// Boot
app.listen(8080, () => console.log('Listening on port 8080!'));
