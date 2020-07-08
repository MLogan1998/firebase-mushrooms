import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';
import smash from '../../helpers/smash';
import showForm from '../createShroom/createShroom';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#single-myco', '');
    })
    .catch((err) => console.warn(err));
};

const addShroomEvent = (e) => {
  e.preventDefault();
  const newMushroom = {
    name: $('#mushroomName').val(),
    size: $('#mushroomSize').val(),
    location: $('#mushroomLocation').val(),
    weight: $('#mushroomWeight').val() * 1,
  };
  mushroomData.addMushroom(newMushroom)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#new-shroom', '');
    })
    .catch((err) => console.error('could not add mushroom', err));
};

const buildForest = () => {
  smash.getMushroomsWithOwners()
    .then((testData) => {
      console.error('test', testData);
    })
    .catch((err) => err);
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
        <h2>Forest</h2>
        <button class="btn btn-danger" id="showMushForm"><i class="fas fa-plus mr-1"></i>Add Mushroom</button>
        <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';

      utils.printToDom('#forest', domString);
      $('body').on('click', '.delete-shroom', removeShroomEvent);
      $('body').on('click', '#showMushForm', showForm.showForm);
      $('body').one('click', '#mushCreator', addShroomEvent);
    })

    .catch((err) => console.error(err));
};

export default { buildForest };
