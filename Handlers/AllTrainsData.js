const axios = require('axios');
const GetToken = require("./GetToken");

async function AllTrainsinfo(req, res) {
  try {

    const token = await GetToken();
    const Url = `http://20.244.56.144/train/trains`;
    const headers = {
      Authorization: `Bearer ${token}`, 
    };

    const response = await axios.get(Url, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error in fetching train data:', error.message);
    res.status(500).json({ error: 'Error' });

  }
}

module.exports = AllTrainsinfo;
