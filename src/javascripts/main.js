import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/myNavBar/myNavBar';

/**
* Be able to log in to our app
* Be able to log out of our app
* See a login button if we aren't logged in
* Seee a logout button if we are logged in
* See a list of mushrooms if we are logged in
*/

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.logInButton();
  logout.logoutEvent();
};

init();
