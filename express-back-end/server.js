const express = require('express');
const app = express();
const path = require('path');

const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//mc - setuo db
const db = require('./db');
const dbPlayersHelpers = require('./dbHelpers/players')(db);

const playersRouter = require('./routes/players');

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

app.use('/api/players', playersRouter(dbPlayersHelpers));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
