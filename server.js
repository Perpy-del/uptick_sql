#!/usr/bin/env node
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */

/**
 * Module dependencies.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const debug = require('debug')('sca-capstone:server');
const http = require('http');
const app = require('./app');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const myPort = parseInt(val, 10);

  if (isNaN(myPort)) {
    // named pipe
    return val;
  }

  if (myPort >= 0) {
    // myPort number
    return myPort;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  console.log(`Listening on ${bind}`);
}


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
