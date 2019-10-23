import { schedule } from 'node-cron';

const quotesData = require('../data/quotes_array');

let numberOfQuote = 0;

schedule('* * * * *', () => {
  // eslint-disable-next-line no-console
  console.log('running a task every minute');
  numberOfQuote += 1;
});

module.exports = (app) => {
  app.get('/api/quotes_data', (req, res) => {
    res.json(quotesData[numberOfQuote]);
  });
};
