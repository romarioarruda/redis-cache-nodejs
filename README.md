# redis-cache-nodejs

This is an test of caching with Redis and Node.js.

For running this project you need have Redis installed in your environment.

Running Redis on your local environment:

```
$ brew services start redis

or

$ sudo service redis-server start

or using docker

$ docker container run -it --name redis_db -p 6379:6379 -d redis

```

Install the dependencies of Node.js

```
$ npm i
```

Start project
```
$ npm start
```

Open in

`http://localhost:3000/`
