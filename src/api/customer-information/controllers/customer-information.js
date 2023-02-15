'use strict';

/**
 *  customer-information controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController
('api::customer-information.customer-information', ({strapi}) => ({

   async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },


//    module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
}))
;
