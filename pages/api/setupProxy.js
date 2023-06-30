const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.beta.unycos.com',
      changeOrigin: true,
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
      },
    })
  );
};
