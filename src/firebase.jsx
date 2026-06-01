import {initializeApp} from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyD-hYsAGkpXvZ22186HlYyVT-uKO_dBWOI",
  authDomain: "d-68e02-default-rtdb.firebaseio.com/",
  projectId: "fireguard-68e02",
  storageBucket: "fireguard-68e02.firebasestorage.app",
  messagingSenderId: "306560541468",
  appId: "1:306560541468:web:75dcc4d77663df4dc5d0d9",
  measurementId: "G-13X5BJXQVW"
};
const app = initializeApp(firebaseConfig);
 export const db=getDatabase(app)
 export default app;