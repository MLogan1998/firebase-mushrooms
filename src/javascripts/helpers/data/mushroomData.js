import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;

const getMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/mushrooms.json`)
    .then((response) => {
      const mushroomObjects = response.data;
      const mushrooms = [];
      if (mushroomObjects) {
        Object.keys(mushroomObjects).forEach((mushroomId) => {
          mushroomObjects[mushroomId].id = mushroomId;
          mushrooms.push(mushroomObjects[mushroomId]);
        });
      }
      resolve(mushrooms);
    })
    .catch((err) => reject(err));
});

const deleteMushroom = (mushroomId) => axios.delete(`${baseURL}/mushrooms/${mushroomId}.json`);

// const getMycologistById = (mycologistId) => axios.get(`${baseURL}/mycologists/${mycologistId}.json`);

const addMushroom = (newMushroomObj) => axios.post(`${baseURL}/mushrooms.json`, newMushroomObj);

const getMushById = (mushroomId) => axios.get(`${baseURL}/mushrooms/${mushroomId}.json`);

const updateMushroom = (mushroomId, editedMushroom) => axios.put(`${baseURL}/mushrooms/${mushroomId}.json`, editedMushroom);

export default {
  getMushrooms,
  deleteMushroom,
  addMushroom,
  getMushById,
  updateMushroom,
};
