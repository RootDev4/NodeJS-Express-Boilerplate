# NodeJS Express Boilerplate
A NodeJS boilerplate to quickly build server apps with express framework and EJS template engine.

## Installation
Clone this repository with
```
git clone https://github.com/RootDev4/NodeJS-Express-Boilerplate.git
```
and install the dependencies with
```
npm install
```
## Start
Start your webserver by running
```
npm start
```

## SSL support
This project provides SSL support. Please replace the files in ssl/ directory with your .perm files and set `use_ssl=true` in .env configuration file to enable a HTTPS webserver.

## Pre-installed libraries & frameworks
This repository comes with a bunch of pre-installed libraries and frameworks.

### Express
Fast, unopinionated, minimalist web framework.

### CORS
CORS is a NodeJS package for providing an express middleware that can be used to enable CORS with various options.

### Helmet
Helmet helps you secure your express apps by setting various HTTP headers.

### Cookie Parser
Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

### dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

### EJS
Embedded JavaScript template engine.

### jQuery, jQuery UI, Bootstrap, Bootstrap Icons, Sweetalert2
The most popular front-end frameworks for developing dynamic and responsive projects on the web.

### Nodemon
Simple monitor script for use during development of a NodeJS app.
Start your project in monitor mode by running
```
npm run dev
```

## License
[MIT](LICENSE)