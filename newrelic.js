/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 *
 * Also see: https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration
 * and: https://github.com/newrelic/node-newrelic/blob/master/lib/config.default.js
 */
exports.config = {
  app_name: ['cp-dojos-service'],
  agent_enabled: false, // set via NEW_RELIC_ENABLED for production
  license_key: '',      // set via NEW_RELIC_LICENSE_KEY
  filepath: '/tmp/newrelic_agent_dojos.log',
  transaction_tracer: {
    record_sql: 'obfuscated',
  },
  logging: {
    level: 'info',
  }
};
