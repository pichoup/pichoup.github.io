# Careageous

* public files go in `./public/` and are accessible via the root path
  * e.g. `public/startupweekend` is http://localhost:5000/startupweekend

#### Caregivers's Phone

* Set the image value with: http://localhost:5000/slide/update?index=http://blach.com/
  * Create a jquery function that runs when the image element is clicked
    * see: https://api.jquery.com/click/


#### Granparent's Tablet
* Get the current image with: http://localhost:5000/slide/current
  * Inside the <head><script>...</script></head> of the HTML page (memorybox), add a call to setInterval which will run every N milliseconds (i.e. 1 second is 1000).
    * see: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval

*Example:*

    var oldval = '';
    setInterval(getCurrentImage, 1000);

    function getCurrentImage() {
      // 1. call to http://localhost:5000/slide/current and set newval
      // 2. compare newval to oldval. If not equal, switch image. If equal, do nothing.
      // 3. set oldval to newval.
    }


---

# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
