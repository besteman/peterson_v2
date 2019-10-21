const quotesData = require('../data/quotes_array');

module.exports = (app) => {
  app.get('/api/quotes_data', (req, res) => {
    res.json(quotesData[0]);
  });
};
