import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';
import mushroomComponent from '../mushroom/mushroom';
import smash from '../../helpers/smash';

const removeShroomEvent = (e) => {
  const mushroomId = e.target.closest('.card').id;
  console.warn(mushroomId);
  smash.totallyRemoveShroomie(mushroomId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildForest();
      utils.printToDom('#single-myco', '');
    })
    .catch((err) => console.warn(err));
};

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => {
      let domString = `
        <h2>Forest</h2>
        <div class="d-flex flex-wrap">
      `;
      mushrooms.forEach((mushroom) => {
        domString += mushroomComponent.mushroomMaker(mushroom);
      });
      domString += '</div>';

      utils.printToDom('#forest', domString);
      $('body').on('click', '.delete-shroom', removeShroomEvent);
    })

    .catch((err) => console.error(err));
};

export default { buildForest };
