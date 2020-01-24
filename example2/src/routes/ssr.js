import express from 'express';
import hbs from 'handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/app';

const router = express.Router();

router.get('/', async (req, res) => {
  const theHtml = `
  <html>
  <head><title>My Second SSR</title></head>
  <body>
  <h1>My Second Server Side Render</h1>
  <div id="reactele">{{{reactele}}}</div>
  <script src="/app.js" charset="utf-8"></script>
  <script src="/vendor.js" charset="utf-8"></script>
  </body>
  </html>
  `;

  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = renderToString(<App />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend);
});

export default router;