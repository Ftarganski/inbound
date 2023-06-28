const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Defina o cabeçalho 'Access-Control-Allow-Origin' para permitir solicitações do seu aplicativo React
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://inbound-psi.vercel.app');
  next();
});

// Crie um proxy para redirecionar as solicitações para a API
app.use(
  '/u',
  createProxyMiddleware({
    target: 'https://api.beta.unycos.com',
    changeOrigin: true,
  })
);

// Inicie o servidor na porta desejada
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor intermediário iniciado na porta ${port}`);
});