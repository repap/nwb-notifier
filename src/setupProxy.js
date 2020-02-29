const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/functions',
    proxy({
      target: 'http://localhost:4000',
    })
  )
  app.use(
    '/__',
    proxy({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  )
};