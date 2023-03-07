'use strict';

/**
 * p-application router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::p-application.p-application');
