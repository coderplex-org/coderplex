# How to Contribute

Coderplex web application comprises of two repositories :

- [Coderplex](https://github.com/coderplex/coderplex) * : Frontend of the application

- [Coderplex-Backend](https://github.com/coderplex/coderplex-backend) : Backend of the application

Both of them are under very active development. This document provides non exhaustive guidelines for contributing to this repository.  

## Code of Conduct
Coderplex has adopted [Contributor Covenant](https://github.com/coderplex/coderplex/blob/docs-update/CODE_OF_CONDUCT.md) that we expect project participants to adhere to.

## Open Development
All work related to web app takes place on Github itself. We use [Issues](https://github.com/coderplex/coderplex/issues) to track bugs, discuss ideas and work on improvements. [Projects](https://github.com/coderplex/coderplex/projects) are used to keep track of everything and is our project management app. We maintain [Wiki](https://github.com/coderplex/coderplex/wiki) for structuring our long term thoughts. Both maintainers and contributors sends a pull request which goes through the same review process. Whole process is as transparent as it can be and we strive to keep it that way.

## Contribution Prerequisites
### NodeJS
Minimum Node version v8.0.0+
```bash
To check node version
$ node -v
 ```
##### Using a Version Manager
If you prefer to keep LTS version or face problem updating your node then you might need a Node version manager tool.

###### [nvm](https://github.com/creationix/nvm) for Linux & OSX
```bash
Install
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```
*Make sure you have cURL installed*

###### [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows
It comes with a [installer](https://github.com/coreybutler/nvm-windows#installation--upgrades).



We welcome pull requests from hackerspace members (our students) and seasoned JavaScript developers alike! Follow these steps to contribute:

1. Find an issue that needs assistance by searching for the [Help Wanted](https://github.com/coderplex/coderplex/labels/help-wanted) tag.

1. Let us know you are working on it by posting a comment on the issue.

1. Follow the [Contribution Guidelines](#contribution-guidelines) to start working on the issue.

Remember to feel free to ask for help in our [Discord](https://discordapp.com/invite/dVnQ2Gf) rooms.

Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Running this project locally

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

**Note:**
> So our team's official policy (for now) is: We only use [Yarn](https://yarnpkg.com/en/docs/install) as our official Node package manager, and so we request you to use Yarn instead of npm and commit yarn.lock file.


## How to get in touch
- [Coderplex Discord Channel](https://discord.gg/dVnQ2Gf)
- Tweet maintainers
