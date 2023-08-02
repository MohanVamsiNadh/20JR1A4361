const axios = require('axios');
let token = ''; 

async function GetToken() {
  const Url = 'http://20.244.56.144/train/auth';
  const requestData = {
    companyName: 'Train Central',
    clientID: '2f3da39f-52fb-43ff-97e9-d81f427bbe88',
    ownerName: 'Mohan',
    ownerEmail: 'mohanvamsinadh999@gmail.com',
    rollNo: '20JR1A4361',
    clientSecret: 'bWscOLULiIiQtPiP',
  };

  try {
    const response = await axios.post(Url, requestData);
    token = response.data.access_token;
    return token; 
  } catch (error) {
    console.error('Error', error.message);
    return null; 
  }
}

module.exports = GetToken;
