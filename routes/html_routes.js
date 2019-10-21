const path = require('path');

module.exports = (app) => {
  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
