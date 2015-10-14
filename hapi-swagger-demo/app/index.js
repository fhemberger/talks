'use strict';

const Config = require('config');
const Hapi   = require('hapi');

const server = new Hapi.Server();


server.connection({
    port: Number(process.env.PORT) || Config.server.port,
});


server.register(
    [
        // Serve static files (required for hapi-swagger)
        { register: require('inert') },

        // Serve views (required for hapi-swagger)
        { register: require('vision') },

        // Logging
        { register: require('good'), options: Config.good },

        // API documentation
        { register: require('hapi-swagger'), options: Config.swagger },

        // Return API resonses in jsonapi.org format
        { register: require('hapi-jsonapi') }
    ],
    function (err) {

        if (err) { throw err; }

        server.route(require('./routes.js'));
        server.start(function () {

            server.log('info', `Server running at: ${server.info.uri}`);
        });
});
