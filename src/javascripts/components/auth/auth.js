import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const logInButton = () => {
  const domString = '<button id="googleAuth" class="btn btn-warning"><i class="fab fa-google-plus-square"></i>Log Me In</button>';
  utils.printToDom('#auth', domString);
  $('#googleAuth').click(signMeIn);
};

export default { logInButton };
