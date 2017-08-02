import Cookie from 'js-cookie';

import { client as feathersClient, baseUrl } from './feathers-client';

export function login(service, url) {
  let href;
  if (url.query.next) {
    href = `${baseUrl}/auth/${service}?next=${url.query.next}`;
  } else {
    href = `${baseUrl}/auth/${service}`;
  }
  window.location.href = href;
}

export function logout() {
  const href = `${window.location.href}?logout=1`;
  window.localStorage.setItem('logout', Date.now());
  feathersClient
    .logout()
    .then(() => {
      feathersClient.set('user', null);
      Cookie.remove('feathers-jwt', { path: '' });
      window.location.href = href;
    })
    .catch(console.log);
}

export function authenticate() {
  const token = Cookie.get('feathers-jwt');
  console.log(token);
  if (!token) {
    feathersClient.set('user', null);
    const e = new Error('not authenticated');
    e.code = 401;
    return Promise.reject(e);
  }
  return feathersClient
    .authenticate({
      strategy: 'jwt',
      accessToken: token,
    })
    .then(response => {
      return feathersClient.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
      feathersClient.set('user', null);
      return feathersClient.service('users').get(payload.userId);
    })
    .then(user => {
      if (process.browser) {
        feathersClient.set('user', user);
      }
      return user;
    });
}
