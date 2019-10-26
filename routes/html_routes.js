// import { join } from 'path';

module.exports = (app) => {
  app.get('/about', (req, res) => {
    res.render('about');
    // res.sendFile(join(__dirname, '../public/about.html'));
  });

  app.get('*', (req, res) => {
    res.render('quote');
    // res.sendFile(join(__dirname, '../public/index.html'));
  });
};
