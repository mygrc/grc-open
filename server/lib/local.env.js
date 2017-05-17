'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "94fad8c5-69e6-4afc-a2fb-93b609d726c8",
  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};