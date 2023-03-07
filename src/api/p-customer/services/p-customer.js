'use strict';

/**
 * p-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-customer.p-customer');
