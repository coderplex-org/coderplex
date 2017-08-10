# Coderplex Website [Work In Progress]

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/coderplex/coderplex-website.svg?branch=master)](https://travis-ci.org/coderplex/coderplex-website)

## About

This project mainly uses

- [Next.js](https://github.com/zeit/next.js/)
- [Semantic UI React](http://react.semantic-ui.com/introduction)

## Demo

[https://dev.coderplex.org](https://dev.coderplex.org)

- [x] Login/Registration with Github and LinkedIn
- [x] Collecting additional profile details after Registration
- [x] Allow all users to view created jobs
- [x] Allow loggedIn users to post new job opening
- [ ] Allow users to search/filter jobs
- [ ] Allow users to edit their profile
- [ ] Complete all navigation pages present in navbar

## Running Locally

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
    > Make sure you install node version 8 or above and check node version by running `node -v`
1. We also need backend API so follow instructions [here](https://github.com/coderplex/coderplex-backend) to setup and start backend server 
1. Then clone this repo
    ```bash
    git clone git@github.com:coderplex/coderplex-website.git
    ```
1. `cd coderplex-website`
1. `npm install`
1. `npm run dev` to start local development server
1. Open app at `localhost:3000`
