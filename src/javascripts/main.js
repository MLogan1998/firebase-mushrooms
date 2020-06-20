import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/myNavBar/myNavBar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.logInButton();
  logout.logoutEvent();
};

init();
