// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://api.beta.unycos.com/u/courses/spotlights/natacion',
//       changeOrigin: true,
//       headers: {
//         'Content-Type': 'application/json',
//         'x-mejor-key': 'unycos',
//       },
//       onProxyRes: function (proxyRes, req, res) {
//         proxyRes.headers['Access-Control-Allow-Origin'] = 'https://inbound-psi.vercel.app';
//       },
//     })
//   );
// };
