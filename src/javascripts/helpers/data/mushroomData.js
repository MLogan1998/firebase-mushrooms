import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;
const getMushrooms = () => axios.get(`${baseURL}/mushrooms.json`);

export default { getMushrooms };
