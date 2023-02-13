'use strict';

/**
 * employee-location service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-location.employee-location');
