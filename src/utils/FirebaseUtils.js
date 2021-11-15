import { initializeApp } from '@firebase/app';
import { getDatabase } from '@firebase/database';

const config = {
  apiKey: '***************************',
  authDomain: '***********************',
  databaseURL: '***********************',
  projectId: '**********************',
  storageBucket: '************************',
  messagingSenderId: '*******************',
  appId: '*********************************',
  measurementId: '********************',
};

export const firebaseImpl = initializeApp(config);
export const firebaseDatabase = getDatabase(firebaseImpl);
