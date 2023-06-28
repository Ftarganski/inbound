import axios from 'axios';
import Cors from 'cors';

const cors = Cors({
  origin: 'https://inbound-psi.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

const handler = async (req, res) => {
  await cors(req, res);

  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
        headers: {
          'Content-Type': 'application/json',
          'x-mejor-key': 'unycos',
        },
      });

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-mejor-key');

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
