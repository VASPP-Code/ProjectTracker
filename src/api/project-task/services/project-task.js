'use strict';

/**
 * project-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-task.project-task');
