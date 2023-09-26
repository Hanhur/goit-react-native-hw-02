import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCwJs8iRrzY1QK5mLSomMXaj2bhHUyLPv4',
    authDomain: 'react-native-hw-9e922.firebaseapp.com',
    databaseURL: 'https://react-native-hw-9e922-default-rtdb.firebaseio.com',
    projectId: 'react-native-hw-9e922',
    storageBucket: 'react-native-hw-9e922.appspot.com',
    messagingSenderId: '699795428995',
    appId: '1:699795428995:web:31929227f5b4399b376db6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
