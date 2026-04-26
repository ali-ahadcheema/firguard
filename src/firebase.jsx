import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "fireguard-68e02.firebaseapp.com",
  projectId: "fireguard-68e02",
  storageBucket: "fireguard-68e02.firebasestorage.app",
  messagingSenderId: "306560541468",
  appId: "1:306560541468:web:75dcc4d77663df4dc5d0d9",
  measurementId: "G-13X5BJXQVW"
};
const app = initializeApp(firebaseConfig);
export default app;
