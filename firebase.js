// ============================================================
//  Firebase Configuration
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyBrWsDrxPODObRDeB4ZB-n0PRXsMxzmIyc",
    authDomain: "vm-temp0.firebaseapp.com",
    projectId: "vm-temp0",
    storageBucket: "vm-temp0.firebasestorage.app",
    messagingSenderId: "480330086208",
    appId: "1:480330086268:web:e97d5591e889c2310ed6f9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

if (typeof firebase.auth === 'function') {
    window.auth = firebase.auth();
}
