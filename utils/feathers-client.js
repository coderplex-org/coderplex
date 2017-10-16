import fetch from 'isomorphic-unfetch';
import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import rest from 'feathers-rest/client';

const baseUrl =
  process.env.NODE_ENV === 'production' || process.env.WITH_API
    ? `https://coderplex.org/api`
    : 'http://localhost:4000';

const client = feathers();

client
  .configure(rest(baseUrl).fetch(fetch))
  .configure(hooks())
  .configure(auth());

export { client, baseUrl };
