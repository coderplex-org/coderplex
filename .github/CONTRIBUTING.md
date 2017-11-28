# How to Contribute

Coderplex web application comprises of two repositories :

- [Coderplex](https://github.com/coderplex/coderplex) : Frontend of the application

- [Coderplex-Backend](https://github.com/coderplex/coderplex-backend) : Backend of the application

Both of them are under very active development. This document provides non exhaustive guidelines for contributing to this repository.  

## Code of Conduct
Coderplex has adopted [Contributor Covenant](https://github.com/coderplex/coderplex/blob/develop/.github/CODE_OF_CONDUCT.md) that we expect project participants to adhere to.

## Open Development
All work related to the application takes place on Github itself. We use [Issues](https://github.com/coderplex/coderplex/issues) to track bugs, discuss ideas and to engage open source contributors. [Projects](https://github.com/coderplex/coderplex/projects) are used to keep track of everything and is our project management tool. We maintain [Wiki](https://github.com/coderplex/coderplex/wiki) for structuring our long term thoughts. Both core team members and contributors sends a pull request which goes through the same review process. Whole process is as transparent as it can be and we strive to keep it that way.

## Branching Model
The `master` branch of coderplex is relatively stable branch which we update for every release. We also have auto deployment in place for that particular branch i.e any changes in that branch gets reflected in [https://coderplex.org](https://coderplex.org).
It is highly recommended for both maintainers and contributors to raise a pull request to `develop` branch. Before every release we throughly test develop branch and merge into master.
![Imgur](https://i.imgur.com/KPO2dLul.png)
<br/>
*A pull request to any other branch may most likely be closed by our bots.*

## Development Workflow

We welcome pull requests from beginners and seasoned javaScript developers alike!

### Work on Issues
1. Find an issue that needs assistance by searching for the [open issues](https://github.com/coderplex/coderplex/labels/help-wanted).
2. If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.
3. If somebody claims an issue but doesn’t follow up for more than a weeks, it’s fine to take over it but you should still leave a comment.


### Proposing a Change
1. Open a new issue if you would like report a bug or suggest improvements.
2. Please wait for core team members to comment on the thread. This lets us reach an agreement on your proposal before you put significant effort into it.

### Prerequisites
1. [NodeJS](https://nodejs.org/)
    <br/>
    Minimum version v8.0.0+
    ```bash
    To check node version
    $ node -v
    ```
    Any lower version than mentioned above may results in this [error](https://github.com/coderplex/coderplex/issues/100).
    > If you face problem updating your node then you might need a Node version manager tool. [Follow here]()

2. [Yarn](https://yarnpkg.com)
    <br/>
    Minimum version v1.2.0+
    <br/>
    Installing instructions are at [official docs](https://yarnpkg.com/en/docs/install#windows-tab).
    Use yarn over npm
    > Our team's official policy (for now) is: We only use [Yarn](https://yarnpkg.com/en/docs/install) as our official Node package manager, and so we request you to use Yarn instead of npm and commit `yarn.lock` file.

3. [Git](https://git-scm.com/download/linux)
    <br/>
    Familiarity with git is mandatory.

### Sending a Pull Request

*Working on your first Pull Request? You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)*

#### Running Locally

1. Fork the [repository](https://github.com/coderplex/coderplex).
1. Then clone your forked repository
    ```bash
    $ git clone <your forked repository url>
    ```
1. Move to the repository root folder
    ```bash
    $ cd coderplex
    ```  
1. Install dependencies
    ```bash
    $ yarn
    ```
1. Start the development server
    ```bash
    $ yarn dev
    ```
    App now opens at `localhost:3000` in your default browser.
    > You may get this [error]() if any other app is already running the above port.

#### Before submitting:
1. From your fork, create a [branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) and name it. eg. `typo-in-readme`
1. If you’ve fixed a bug or added code that should be tested, add tests!
1. Ensure that all test pass
    ```bash
    $ yarn test
    ```
1. Run code formatters
    ```bash
    $ yarn lint
    ```
1. Add and commit your code. Please give meaning full commit messages.
1. Pull latest code from [upstream repository's ](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/)`develop`, if in case anything new were merged while you were working on your fork.
1. Push the code to your fork.
1. Raise the pull request from your created branch to `develop` branch of coderplex. [why develop instead of master branch?]()
1. Take some time to give a brief description of the work you have done.

#### After submitting
1. Wait for all checks to pass in below section.
2. Your changes are deployed with a unique link `https://deploy-preview-xx--coderplex.netlify.com`. <br/>
*`- xx` is your pull request number.*
3. The core team  will review your pull request and either merge it, request changes to it, or close it with an explanation.

##### Received a review request
- Work on the requested changes
- Push the changes as you did earlier, the pull request will automatically catch those and update itself.

### How to get in touch
- Coderplex [Discord Channel](https://discord.gg/dVnQ2Gf)
- Tweet core team members :
  - Vinay Puppal [@VinayPuppal](https://twitter.com/vinaypuppal)
  - Md-ZubairAhmed [@Md_ZubairAhmed](https://twitter.com/Md_ZubairAhmed)
  - P Bhanu Teja [@pbteja1998](https://twitter.com/pbteja1998)

## Appendix
##### 1. Node Version Manager

###### [nvm](https://github.com/creationix/nvm) for Linux & OSX
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

###### [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows
It comes with an [installer](https://github.com/coreybutler/nvm-windows#installation--upgrades).

```bash
Install particular version
$ nvm install 8.9.1

Use installed version
$ nvm use 8.9.1
```
Still facing problem this [article](https://medium.com/appseed-io/how-to-run-multiple-versions-of-node-js-with-nvm-for-windows-ffbe5c7a2b47) from [@skounis  ](https://twitter.com/skounis) explain in details.

##### 2. Local host occupied
```bash
Error: listen EADDRINUSE :::3000
    at Object._errnoException (util.js:1024:11)
    at _exceptionWithHostPort (util.js:1046:20)
    at Server.setupListenHandle [as _listen2] (net.js:1351:14)
    at listenInCluster (net.js:1392:12)
    at Server.listen (net.js:1476:7)
    at app.prepare.then (/home/m-zubairahmed/github/official/coderplex-frontend/server.js:26:6)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
error Command failed with exit code 1.
```
If you get this error while running `yarn dev` then probably another app is occupying `localhost:3000`. You may want to close that and run the command again.
