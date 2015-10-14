'use strict';

const Config = require('config');


exports.index = {
    handler: function (request, reply) {

        let data = {
            id: 1,
            type: 'root',
            meta: {
                version: Config.swagger.apiVersion
            }
        };

        let links = {
            documentation : Config.swagger.documentationPath,
            swaggerRaw    : Config.swagger.endpoint
        };
        reply.jsonapi({ data, links });
    }
};


exports.heartbeat = {
    description: 'API Heartbeat',
    notes: 'Returns general API and database status',
    tags: ['api'],
    handler: function (request, reply) {

        let data = {
            id: 1,
            type: 'heartbeat',
            meta: {
                status: 'ok',
                version: Config.swagger.apiVersion
            }
        };

        let links = {
            documentation : Config.swagger.documentationPath,
            swaggerRaw    : Config.swagger.endpoint
        };
        reply.jsonapi({ data, links });
    }
};
