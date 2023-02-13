'use strict';

/**
 * customer-location service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-location.customer-location');
