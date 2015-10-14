'use strict';

const Pages   = require('./controllers/pages.js');
const Company = require('./controllers/company.js');


module.exports = [
    { method: 'GET',    path: '/',               config: Pages.index },
    { method: 'GET',    path: '/heartbeat',      config: Pages.heartbeat },

    { method: 'GET',    path: '/companies',      config: Company.listCompanies },
    { method: 'POST',   path: '/companies',      config: Company.create },
    { method: 'GET',    path: '/companies/{id}', config: Company.get },
    { method: 'DELETE', path: '/companies/{id}', config: Company.delete },
];
