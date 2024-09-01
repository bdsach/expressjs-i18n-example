const express = require('express');
const bodyParser = require('body-parser');
const i18n = require('i18n');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// i18n setup
i18n.configure({
  locales: ['en', 'th'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  cookie: 'locale',
  queryParameter: 'lang',
});

app.use(i18n.init);

// API routes
const blogRoutesEn = require('./controllers/blog');
const blogRoutesTh = require('./controllers/blog');
app.use('/api', blogRoutesEn);
app.use('/api', blogRoutesTh);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
