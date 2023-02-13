'use strict';

/**
 * leave service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave.leave');
