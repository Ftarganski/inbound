import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.beta.unycos.com/u/courses/spotlights/natacion', {
      headers: {
        'Content-Type': 'application/json',
        'x-mejor-key': 'unycos',
        'Access-Control-Allow-Origin': '*',
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status || 500).json({ error: 'Internal Server Error' });
  }
}
