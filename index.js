import express, { static as _static, urlencoded, json } from 'express';

const app = express();

const PORT = process.env.PORT || 8081;

app.use(_static(`${__dirname}/public`));

app.use(urlencoded({
  extended: true,
}));

app.use(json());

require('./routes/api_routes')(app);
require('./routes/html_routes')(app);

app.listen(PORT);
