'use strict';

const axios = require('axios');
const frontendWebhookBuildURL = strapi.config.custom.frontendWebhookBuildURL;

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(entry) {
      if (frontendWebhookBuildURL)
        axios.post(frontendWebhookBuildURL, entry);
    },
    async afterUpdate(entry) {
      if (frontendWebhookBuildURL)
        axios.post(frontendWebhookBuildURL, entry);
    },
    async afterDelete(entry) {
      if (frontendWebhookBuildURL)
        axios.post(frontendWebhookBuildURL, entry);
    },
  }
};
