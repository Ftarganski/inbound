const express = require('express');
const axios = require('axios');

const app = express();

// Rota para encaminhar as solicitações para a API
app.get('/api/u/courses/spotlights/natacion', async (req, res) => {
  try {
    const response = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
        'Access-Control-Allow-Origin': 'https://inbound-psi.vercel.app', // Defina a origem permitida pela API
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os dados da API' });
  }
});

// Inicie o servidor na porta 9004
app.listen(9004, () => {
  console.log('Servidor intermediário em execução na porta 9004');
});
