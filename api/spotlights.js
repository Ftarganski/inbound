import axios from 'axios';
import Cors from 'cors';

const cors = Cors({
  origin: 'https://inbound-psi.vercel.app', // Domínio do seu aplicativo React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

const handler = async (req, res) => {
  await cors(req, res); // Adiciona os cabeçalhos CORS à resposta

  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
        headers: {
          'Content-Type': 'application/json',
          'x-mejor-key': 'unycos',
        },
      });

      res.status(200).json(response.data.spotlights);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter os dados da API' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};

export default handler;
