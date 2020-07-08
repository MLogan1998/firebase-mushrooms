import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllMycoMushrooms = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistsMushrooms.json`)
    .then((response) => {
      const mycoMushies = response.data;
      const mycologistMushies = [];
      Object.keys(mycoMushies).forEach((mycoShroomId) => {
        mycoMushies[mycoShroomId].id = mycoShroomId;
        mycologistMushies.push(mycoMushies[mycoShroomId]);
      });

      resolve(mycologistMushies);
    })
    .catch((err) => reject(err));
});

const getMycoShroomsByMycoUid = (mycoUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistsMushrooms.json?orderBy="mycologistUid"&equalTo="${mycoUid}"`)
    .then((response) => {
      const mycoShroomsObj = response.data;
      const mycologistMushrooms = [];
      Object.keys(mycoShroomsObj).forEach((mycoShroomId) => {
        mycoShroomsObj[mycoShroomId].id = mycoShroomId;
        mycologistMushrooms.push(mycoShroomsObj[mycoShroomId]);
      });

      resolve(mycologistMushrooms);
    })
    .catch((err) => reject(err));
});

const getMycoShroomsByShroomId = (shroomId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/mycologistsMushrooms.json?orderBy="mushroomId"&equalTo="${shroomId}"`)
    .then((response) => {
      const mycoShroomsObj = response.data;
      const mycologistMushrooms = [];
      Object.keys(mycoShroomsObj).forEach((mycoShroomId) => {
        mycoShroomsObj[mycoShroomId].id = mycoShroomId;
        mycologistMushrooms.push(mycoShroomsObj[mycoShroomId]);
      });

      resolve(mycologistMushrooms);
    })
    .catch((err) => reject(err));
});

const deleteMycoMushroom = (mycoMushroomId) => axios.delete(`${baseUrl}/mycologistsMushrooms/${mycoMushroomId}.json`);

export default {
  getMycoShroomsByMycoUid,
  getMycoShroomsByShroomId,
  deleteMycoMushroom,
  getAllMycoMushrooms,
};
