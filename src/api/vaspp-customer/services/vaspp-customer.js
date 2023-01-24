'use strict';

/**
 * vaspp-customer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vaspp-customer.vaspp-customer');
