Express & ES6 MongoDB REST API Boilerplate
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
docker  run -p 8080:8080   -d   --network my-network --rm --name webapi -t dodorobot/nodejs-image-demo
#                 ^         ^                ^        ^           ^                ^
#          bind the port                                                        container tag
#          to your host
#          machine port   

```

Run Env
------
```sh
cd node-webapi-example

# build the project
npm run build

# Build your docker
docker build -t dodorobot/node-webapi-example .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# create a network 
docker create network my-network


# run mongodb container
docker container run -d -v mydata:/var/lib/mongo -p 27017:27017 --network my-network --rm --name database mongo:3.4-jessie
#                                ^                      ^                       ^                                ^
#                           volume on               bind the port           connect to                      container tag                                 
#                           localhost               to your host            my-network  
#                          to store data            machine port 

# run your docker
docker  run -p 8080:8080   -d   --network my-network --rm --name webapi -t dodorobot/nodejs-image-demo
#                 ^         ^                ^         ^                            ^
#          bind the port  detach         connect to    remove                  container tag
#          to your host  console from    my-network    the name
#          machine port   process                      when stop

```


License
-------

MIT
