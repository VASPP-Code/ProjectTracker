'use strict';

/**
 * vendor router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::vendor.vendor');
