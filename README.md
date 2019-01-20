Express & ES6 REST API Boilerplate
==================================

This is an example project for building REST APIs with ES6, Express and MongoDB.

- Starting project cloned from this repo [babel](https://github.com/developit/express-es6-rest-api)
- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- Mongo Connection via [mongodb](http://mongodb.github.io/node-mongodb-native)


Getting Started
---------------

docker container run -d -v mydata:/var/lib/mongo -p 27017:27017 --network my-network --rm --name database mongo:3.4-jessie
docker  run -d --network my-network -p 8080:8080 --rm --name webapi -t dodorobot/nodejs-image-demo

```sh
# clone it
git clone https://github.com/dodo-robot/dodo-robot-node-webapi-example.git
cd node-webapi-example

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
Docker Support
------
```sh
cd node-webapi-example

# Build your docker
docker build -t dodorobot/node-webapi-example .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 dodorobot/node-webapi-example
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------

MIT
