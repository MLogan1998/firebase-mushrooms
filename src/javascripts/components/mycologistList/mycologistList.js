import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';
import mycologistData from '../../helpers/data/mycologistData';
import mycologistComponent from '../mycologist/mycologist';
import singlemyco from '../singlemycologist/singlemycologist';
import showFrom from '../createMyco/createMyco';

const addMycoEvent = (e) => {
  e.preventDefault();
  const newMyco = {
    name: $('#mycoName').val(),
    age: $('#mycoAge').val() * 1,
    uid: firebase.auth().currentUser.uid,
  };
  mycologistData.addMyco(newMyco)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      buildHuts();
      utils.printToDom('#new-myco', '');
    })
    .catch((err) => console.error('could not add mycologist', err));
};

const buildHuts = () => {
  mycologistData.getMycologist()
    .then((mycologists) => {
      let domString = `
        <h2>Huts</h2>
        <button class="btn btn-danger" id="showMycoForm"><i class="fas fa-plus mr-1"></i>Add Mycologist</button>
        <div class="d-flex flex-wrap">
      `;
      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });
      domString += '</div>';

      utils.printToDom('#mycologist', domString);
      $('body').on('click', '.myco-card', (e) => {
        singlemyco.buildMycologist(e);
      });
      $('body').on('click', '#showMycoForm', showFrom.showForm);
      $('body').on('click', '#mycoCreator', addMycoEvent);
    })

    .catch((err) => console.error(err));
};

export default { buildHuts };
