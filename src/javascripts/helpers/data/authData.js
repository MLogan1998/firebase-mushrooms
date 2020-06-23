import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');
const mycologistDiv = $('#mycologist');
const singleMycoDiv = $('#single-myco');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      mycologistDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      singleMycoDiv.removeClass('hide');
      mushroomList.buildForest();
      mycologistList.buildHuts();
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
      mycologistDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
