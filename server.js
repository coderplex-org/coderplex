const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const pathMatch = require('path-match');
const opn = require('opn');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const route = pathMatch();
const match = route('/learn/:id');

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    const params = match(pathname);
    if (params === false) {
      handle(req, res);
      return;
    }
    // Assigning `query` into the params means that we still
    // get the query string passed to our application
    // i.e. /blog/foo?show-comments=true
    app.render(req, res, '/learn/subject', Object.assign(params, query));
  }).listen(port, err => {
    if (err) throw err;
    console.log(`>> App running on http://localhost:${port}`);
    opn(`http://localhost:${port}`);
  });
});
