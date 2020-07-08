import mushroomData from './data/mushroomData';
import mycologistData from './data/mycologistData';
import mycologistMushroomData from './data/mycologistMushroomData';

const getSingleMycoWithShrooms = (mycologistId) => new Promise((resolve, reject) => {
  mycologistData.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      mycologist.id = mycologistId;
      mycologist.mushrooms = [];
      mycologistMushroomData.getMycoShroomsByMycoUid(mycologist.uid).then((mycoShrooms) => {
        mushroomData.getMushrooms().then((allMushrooms) => {
          mycoShrooms.forEach((mycoShroom) => {
            const mushroom = allMushrooms.find((m) => m.id === mycoShroom.mushroomId);
            mycologist.mushrooms.push(mushroom);
          });
          resolve(mycologist);
        });
      });
    })
    .catch((err) => reject(err));
});

const totallyRemoveShroomie = (mushroomId) => new Promise((resolve, reject) => {
  mushroomData.deleteMushroom(mushroomId)
    .then(() => {
      mycologistMushroomData.getMycoShroomsByShroomId(mushroomId).then((mycoShrooms) => {
        mycoShrooms.forEach((mycologistMushroom) => {
          mycologistMushroomData.deleteMycoMushroom(mycologistMushroom.id);
        });
        resolve();
      });
    })
    .catch((err) => reject(err));
});

const getMushroomsWithOwners = () => new Promise((resolve, reject) => {
  mushroomData.getMushrooms()
    .then((allMushrooms) => {
      mycologistData.getMycologist().then((allMycos) => {
        mycologistMushroomData.getAllMycoMushrooms().then((allMycoMushrooms) => {
          const finalMushrooms = [];
          allMushrooms.forEach((singleMushroom) => {
            const mushroom = { mycologists: [], ...singleMushroom };
            const mycoMushroomOwner = allMycoMushrooms.filter((mms) => mms.mushroomId === mushroom.id);

            allMycos.forEach((oneMyco) => {
              const myco = { ...oneMyco };
              const isOwner = mycoMushroomOwner.find((mms) => mms.mycologistUid === myco.uid);
              myco.isChecked = isOwner !== undefined;
              myco.mycologistMushroomId = isOwner ? isOwner.id : `no-${mushroom.id}-${myco.id}`;
              mushroom.mycologists.push(myco);
            });
            finalMushrooms.push(mushroom);
          });
          resolve(finalMushrooms);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getSingleMycoWithShrooms, totallyRemoveShroomie, getMushroomsWithOwners };
