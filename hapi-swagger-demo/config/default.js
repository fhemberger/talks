'use strict';

const Package = require('../package.json');


module.exports = {
    server: {
        port: 9000
    },
    good: {
        reporters: [{
            reporter: require('good-console'),
            events: { log: '*', request: '*'},
            config: { format: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' }
        }]
    },
    swagger: {
        // The path of the documentation page (string, default: '/documentation')
        documentationPath: '/documentation',

        // The JSON endpoint that describes the API (string, default: '/docs')
        endpoint: '/docs',

        // The version of your API (string)
        apiVersion: Package.version,

        // The output types from your API (array, default: ['application/json'])
        produces: ['application/vnd.api+json'],

        info: {
            // The title of the application (string, required)
            title: Package.name,

            // A short description of the application (string, required)
            description: Package.description

            // termsOfServiceUrl: A URL to the Terms of Service of the API (string)
            // contact: An email to be used for API-related correspondence (string)
            // license: The license name used for the API (string)
            // licenseUrl: A URL to the license used for the API (string)
        }
    }
};
