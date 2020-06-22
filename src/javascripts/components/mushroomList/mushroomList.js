// import utils from '../../helpers/utils';
import mushroomData from '../../helpers/data/mushroomData';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => console.warn(mushrooms))
    .catch((err) => console.error(err));
  // const domString = '<h5>Forest</h5>';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
