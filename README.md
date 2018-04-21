# Marco Faggosio Website

A blatant copy of Pizzacus website made to mock Marco Faggosio

This repo is for the people interested in the code

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org)
    * [Brunch](http://brunch.io): `npm install -g brunch` or `yarn global add brunch`
    * Brunch plugins and app dependencies: `npm install` or `yarn`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* About our building system:
    * We use [Brunch](http://brunch.io) to build satania.moe, brunch performs many tasks such as minifying data, compacting the files, ect...
    * `public/` dir is fully auto-generated and served by HTTP server. The code is in the `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * To learn more about Brunch: [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
