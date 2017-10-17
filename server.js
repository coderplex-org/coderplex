const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const fetch = require('isomorphic-unfetch');
const feathers = require('feathers/client');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');
const rest = require('feathers-rest/client');

const baseUrl =
  process.env.NODE_ENV === 'production' || process.env.WITH_API
    ? `https://coderplex.org/api`
    : 'http://localhost:4000';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();
const feathersClient = feathers();

feathersClient
  .configure(rest(baseUrl).fetch(fetch))
  .configure(hooks())
  .configure(auth());

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());

    // Handling login
    server.use((req, res, next) => {
      if (!req.query.token) return next();
      res.cookie('feathers-jwt', req.query.token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        httpOnly: false,
      });
      return res.redirect(req.query.next);
    });

    // Handling logout
    server.use((req, res, next) => {
      if (!req.query.logout) return next();
      console.log('logout', req.query.logout);
      res.cookie('feathers-jwt', null, {
        expires: new Date(Date.now() - 1000),
        httpOnly: false,
      });

      return res.redirect('/login');
    });

    // Get loggedIn user
    server.use(async (req, res, next) => {
      const token = req.cookies['feathers-jwt'];
      console.log('****token****');
      console.log(token);
      console.log('****token****');
      if (!token) return next();
      try {
        const { userId } = await feathersClient.passport.verifyJWT(token);
        console.log('****USERID****');
        console.log(userId);
        console.log('****USERID****');
        req.user = await fetch(`${baseUrl}/users/${userId}`, {
          headers: {
            Authorization: `${token}`,
          },
        }).then(res => res.json());
        console.log('****ServerUSER****');
        console.log(req.user);
        console.log('****ServerUSER****');
        next();
      } catch (error) {
        console.error(error);
        next();
      }
    });

    // Pass all routes to next.js handler
    server.get('*', (req, res) => handle(req, res));

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err;
      console.log('> App running on port', process.env.PORT || 3000);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
  });
