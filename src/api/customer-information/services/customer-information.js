'use strict';

/**
 * customer-information service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-information.customer-information');
