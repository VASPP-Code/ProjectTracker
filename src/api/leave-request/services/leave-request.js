'use strict';

/**
 * leave-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave-request.leave-request');
