# How to Contribute

Coderplex web application comprises of two repositories :

- [Coderplex](https://github.com/coderplex/coderplex) * : Frontend of the application

- [Coderplex-Backend](https://github.com/coderplex/coderplex-backend) : Backend of the application

Both of them are under very active development. This document provides non exhaustive guidelines for contributing to this repository.  

## Code of Conduct
Coderplex has adopted [Contributor Covenant](https://github.com/coderplex/coderplex/blob/docs-update/CODE_OF_CONDUCT.md) that we expect project participants to adhere to.

## Open Development
All work related to the application takes place on Github itself. We use [Issues](https://github.com/coderplex/coderplex/issues) to track bugs, discuss ideas and to engage open source contributors. [Projects](https://github.com/coderplex/coderplex/projects) are used to keep track of everything and is our project management tool. We maintain [Wiki](https://github.com/coderplex/coderplex/wiki) for structuring our long term thoughts. Both maintainers and contributors sends a pull request which goes through the same review process. Whole process is as transparent as it can be and we strive to keep it that way.

## Development Workflow

We welcome pull requests from beginners and seasoned javaScript developers alike!

### Work on Issues
1. Find an issue that needs assistance by searching for the [open issues](https://github.com/coderplex/coderplex/labels/help-wanted).
2. If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.
3. If somebody claims an issue but doesn’t follow up for more than a weeks, it’s fine to take over it but you should still leave a comment.


### Proposing a Change
1. Open a new issue if you would like report a bug or suggest improvements.
2. Please wait for maintainers to comment on the thread. This lets us reach an agreement on your proposal before you put significant effort into it.

### Prerequisites
##### 1. [NodeJS](https://nodejs.org/)
Minimum version v8.0.0+
```bash
To check node version
$ node -v
 ```
Any lower version than mentioned above may results in this [error](https://github.com/coderplex/coderplex/issues/100).

> If you face problem updating your node then you might need a Node version manager tool. [Follow here]()

##### 2.[Yarn](https://yarnpkg.com)
Minimum version v1.2.0+
<br/>
Installing instructions are at [official docs](https://yarnpkg.com/en/docs/install#windows-tab)

Use yarn over npm
> Our team's official policy (for now) is: We only use [Yarn](https://yarnpkg.com/en/docs/install) as our official Node package manager, and so we request you to use Yarn instead of npm and commit `yarn.lock` file.

##### 3. [GIT](https://git-scm.com/download/linux)
Familiarity with git is mandatory.


Remember to feel free to ask for help in our [Discord](https://discordapp.com/invite/dVnQ2Gf) rooms.

Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

### Running locally

1. Make sure you have [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/docs/install) installed.
    > Make sure you install node version 8 or above and check node version by running `node -v`
1. Then clone this repo
    ```bash
    git clone https://github.com/coderplex/coderplex.git
    ```
1. `cd coderplex`
1. `npm install`
1. `npm run dev` to start local development server
1. App opens at `localhost:3000`


## How to get in touch
- [Coderplex Discord Channel](https://discord.gg/dVnQ2Gf)
- Tweet maintainers

## Appendix
#### 1. Node Version Manager

##### [nvm](https://github.com/creationix/nvm) for Linux & OSX
```bash
Installation
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

Install latest node lts
$ nvm install --lts

Use installed version
$ nvm use --lts

Run the app in the same terminal session
```
*Make sure you have [curl](https://curl.haxx.se/) installed*

##### [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows
It comes with an [installer](https://github.com/coreybutler/nvm-windows#installation--upgrades).

```bash
Install particular version
$ nvm install 8.9.1

Use installed version
$ nvm use 8.9.1
```
Still facing problem this [article](https://medium.com/appseed-io/how-to-run-multiple-versions-of-node-js-with-nvm-for-windows-ffbe5c7a2b47) from [@skounis  ](https://twitter.com/skounis) explain in details.
