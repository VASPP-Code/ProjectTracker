'use strict';

/**
 * employee-information service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-information.employee-information');
