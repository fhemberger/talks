'use strict';

const Url = require('url');
const Joi = require('joi');
const Path = require('path');
const Boom = require('boom');
const Config = require('config');

const Companies = require( Path.resolve(process.cwd(), 'fixtures/companies.js') );

const internals = {
    validateId: {
        id: Joi.string().length(24).required().description('internal database _id')
    }
};


exports.listCompanies = {
    description: 'List all registered companies',
    notes: '...',
    tags: ['api'],
    handler: function (request, reply) {

        let companies = Companies.getAll();
        companies = companies.map(function (company) {
            return {
                id         : company._id,
                type       : 'company',
                attributes : company
            };
        });

        reply.jsonapi({ data: companies });
    }
};


exports.create = {
    description: 'Create a new company',
    notes: 'For demonstration purposes, assume we posted some data to this endpoint.<br>The API will reply with HTTP 201 (Success), setting the "Location" header to the newly created entry.',
    tags: ['api'],
    plugins: {
        'hapi-swagger': {
            responseMessages: [
                { code: 201, message: 'Created' },
                { code: 401, message: 'Unauthorized' },
                { code: 403, message: 'Forbidden' }
            ]
        }
    },
    handler: function (request, reply) {

        // Dummy ID of the created company
        let createdCompanyId = 123;

        reply
            .jsonapi({
                id   : createdCompanyId,
                type : 'company',
                meta : { action: 'companies/create' }
            })
            // Set the 'Location' header to point to the newly created company,
            // e.g. http://localhost/company/123
            .created(`${request.server.info.uri}${request.path}/${createdCompanyId}`);
    }
};


exports.get = {
    description: 'Get company',
    notes: '...',
    tags: ['api'],
    validate: {
        params: internals.validateId
    },
    plugins: {
        'hapi-swagger': {
            responseMessages: [
                { code: 200, message: 'Ok' },
                { code: 404, message: 'Not Found' }
            ]
        }
    },
    handler: function (request, reply) {

        let company = Companies.get('_id', request.params.id);
        if (!company) {
            return reply.jsonapi( Boom.notFound() );
        }

        reply.jsonapi({
            data: {
                id         : company._id,
                type       : 'company',
                attributes : company
            }
        });
    }
};


exports.delete = {
    description: 'Delete company',
    notes: 'The API will reply with HTTP 204 (No Content) on successful deletion.',
    tags: ['api'],
    validate: {
        params: internals.validateId
    },
    plugins: {
        'hapi-swagger': {
            responseMessages: [
                { code: 204, message: 'No Content' },
                { code: 401, message: 'Unauthorized' },
                { code: 403, message: 'Forbidden' },
                { code: 404, message: 'Not Found' }
            ]
        }
    },
    handler: function (request, reply) {

        let data = Companies.get('_id', request.params.id);
        if (!data) {
            return reply.jsonapi( Boom.notFound() );
        }

        reply.jsonapi(null).code(204);
    }
};
