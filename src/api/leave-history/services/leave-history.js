'use strict';

/**
 * leave-history service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leave-history.leave-history');
