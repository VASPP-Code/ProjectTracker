'use strict';

/**
 * vendor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vendor.vendor');
