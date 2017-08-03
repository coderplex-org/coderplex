[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# About
**Work In Progress** new Coderplex website

## Demo

[https://dev.coderplex.org](https://dev.coderplex.org)

- [x] Login/Registration with Github and Linked
- [x] Collecting additional profile details after Registration
- [x] Allow all users to view created jobs
- [x] Allow loggedIn users to post new job opening
- [ ] Allow users to search/filter jobs
- [ ] Allow users to edit their profile
- [ ] Complete all navigation pages present in navbar

## Running Locally
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
    > Make sure you install node version 8 or above and check node version by running `node -v`
2. We also need backend API so follow instructions [here](https://github.com/coderplex/coderplex-backend) to setup and start backend server 
3. Then clone this repo
    ```
    git clone git@github.com:coderplex/coderplex-website.git
    ```
4. `cd coderplex-website`
5. `npm install`
6. `npm run dev` to start local development server
7. Open app at `localhost:3000`
