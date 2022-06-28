import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBP3XiAQQRPa463A90jKVEQ6DFDhohMjdg",
  authDomain: "crwn-clothing-db-c11b2.firebaseapp.com",
  projectId: "crwn-clothing-db-c11b2",
  storageBucket: "crwn-clothing-db-c11b2.appspot.com",
  messagingSenderId: "843946147146",
  appId: "1:843946147146:web:20bf53e7e89b93f23115b3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
