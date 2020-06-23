import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;

const getMycologist = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/mycologists.json`)
    .then((response) => {
      const mycologistObjects = response.data;
      const mycologists = [];
      Object.keys(mycologistObjects).forEach((mycologistId) => {
        mycologistObjects[mycologistId].id = mycologistId;
        mycologists.push(mycologistObjects[mycologistId]);
      });
      resolve(mycologists);
    })
    .catch((err) => reject(err));
});

const getMycologistById = (mycologistId) => axios.get(`${baseURL}/mycologists/${mycologistId}.json`);

export default { getMycologist, getMycologistById };
