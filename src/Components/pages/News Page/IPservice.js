import axios from 'axios'

const IP_API_URL = 'https://api.ipify.org/?format=json';

class IPservice {

    getIPaddress(){

        return axios.get(IP_API_URL);

    }

}

export default new IPservice();