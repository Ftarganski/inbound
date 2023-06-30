const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9004; // Porta que o servidor intermediário irá ouvir

// Middleware para adicionar cabeçalhos CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://inbound-psi.vercel.app');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Rota para encaminhar as solicitações para a API
app.get('/u/courses/spotlights/natacion', async (req, res) => {
  try {
    const response = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os dados da API' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor intermediário rodando em http://localhost:${PORT}`);
});
