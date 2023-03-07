'use strict';

/**
 * p-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-application.p-application');
