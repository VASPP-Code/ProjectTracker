'use strict';

/**
 *  vendor controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vendor.vendor');
