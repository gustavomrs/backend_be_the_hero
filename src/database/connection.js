const knex = require('knex')
const configuration = require('../../knexfile')

let configurationEnvironment = ''

if(process.env.NODE_ENV === 'test')
  configurationEnvironment = configuration.test
else if (process.env.NODE_ENV === 'production')
  configurationEnvironment = configuration.production
else
  configurationEnvironment = configuration.development

const connection = knex(configurationEnvironment)

module.exports = connection