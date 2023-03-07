'use strict';

/**
 * p-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::p-task.p-task');
