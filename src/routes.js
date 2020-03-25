const express = require('express')

const routes = express.Router();

routes.post('/', (request, response) => {
  return response.json({
    it: 'works'
  })
})

module.exports = routes