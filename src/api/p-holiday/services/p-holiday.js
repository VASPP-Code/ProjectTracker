'use strict';

/**
 * p-holiday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-holiday.p-holiday');
