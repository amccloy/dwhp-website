# Dwhp

Code for DWHP.com

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `yarn`
* `bower install`

## Running / Development

* `ember server`
* Preview the website at [http://localhost:4200](http://localhost:4200).

To make changes to the site modify files in the `/app/pods/` folder. The folder strcuture matches the URL structure of the website. You can make small changes directly on github. Quickest way to find the file you want to edit is to use the search box and look for the text you want to modify.

### Building

* `ember build --environment production` (production)

### Deploying

Upload code from `/dist` folder to server. Ensure that the index.html page is also servered for all 404 requests, or duplicate it to 404.html if the server requires that.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
