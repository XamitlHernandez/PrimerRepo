const axios = require('axios');
makeGetRequest = require('./get_users');

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Elizabeth',
        last_name: 'Lara',
        email: 'EliLara97@gmail.com'
      }

    let res = await axios.post("http://localhost:3000/users/", params);

    console.log(res.data);
}

makeGetRequest();

makePostRequest();

makeGetRequest();

