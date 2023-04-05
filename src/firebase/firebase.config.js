// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: "AIzaSyB4ejKYakOQcRJA86B_-xwdyxXDB6Ie9u0",
	authDomain: "car-doctor-shop.firebaseapp.com",
	projectId: "car-doctor-shop",
	storageBucket: "car-doctor-shop.appspot.com",
	messagingSenderId: "127968394643",
	appId: "1:127968394643:web:f56813cf1929be326c3c66",
};

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_apiKey,
// 	authDomain: import.meta.env.VITE_authDomain,
// 	projectId: import.meta.env.VITE_projectId,
// 	storageBucket: import.meta.env.VITE_storageBucket,
// 	messagingSenderId: import.meta.env.VITE_messagingSenderId,
// 	appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
