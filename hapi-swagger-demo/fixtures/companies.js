'use strict';


const companies = [
    {
        '_id': '561a6ecd95bed6cc5cdbbe2a',
        'name': 'Syntac',
        'email': 'info@syntac.net',
        'website': 'http://syntac.net',
        'phone': '+1 (873) 514-3867',
        'address': '893 Nevins Street, Thatcher, Virgin Islands, 3397'
    },
    {
        '_id': '561a6ecd0d6d871223dca8e9',
        'name': 'Terragen',
        'email': 'info@terragen.info',
        'website': 'http://terragen.info',
        'phone': '+1 (994) 462-2590',
        'address': '259 Rugby Road, Cashtown, Connecticut, 5162'
    },
    {
        '_id': '561a6ecdc560da83df0e92c4',
        'name': 'Gallaxia',
        'email': 'info@gallaxia.biz',
        'website': 'http://gallaxia.biz',
        'phone': '+1 (917) 426-3718',
        'address': '521 Forest Place, Elliott, District Of Columbia, 9732'
    },
    {
        '_id': '561a6ecd4f8f4f9c05414512',
        'name': 'Franscene',
        'email': 'info@franscene.name',
        'website': 'http://franscene.name',
        'phone': '+1 (869) 492-2992',
        'address': '247 Bleecker Street, Hamilton, California, 8553'
    },
    {
        '_id': '561a6ecd4b5100780c242fcd',
        'name': 'Macronaut',
        'email': 'info@macronaut.com',
        'website': 'http://macronaut.com',
        'phone': '+1 (873) 402-2426',
        'address': '718 Dunne Place, Marion, New Hampshire, 6498'
    }
];


module.exports.getAll = function (key, value) {

    return companies;
};


module.exports.get = function (key, value) {

    return companies.filter(item => item[key] === value)[0];
};
