import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologist/mycologist';

const buildHuts = () => {
  mycologistData.getMycologist()
    .then((mycologists) => {
      let domString = `
        <h2>Huts</h2>
        <div class="d-flex flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';

      utils.printToDom('#mycologist', domString);
    })

    .catch((err) => console.error(err));
};

export default { buildHuts };
