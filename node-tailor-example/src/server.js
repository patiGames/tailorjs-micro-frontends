const http = require('http');
const Tailor = require('node-tailor');
const path = require('path');

const tailor = new Tailor({
  templatesPath: path.join(__dirname, 'templates')
});

http
  .createServer((req, res) => {
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' });
      return res.end('');
    }
    return tailor.requestHandler(req, res);
  })
  .listen(8080, () => {
    console.log('Tailor server listening on port 8080');
  });
