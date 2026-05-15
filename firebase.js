// ============================================================
//  Firebase Configuration
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyBOZMBDD2oBoTEKxjLVU4gz6wamm6g67vw",
  authDomain: "vm-graphics-25ecc.firebaseapp.com",
  projectId: "vm-graphics-25ecc",
  storageBucket: "vm-graphics-25ecc.firebasestorage.app",
  messagingSenderId: "846618065636",
  appId: "1:846618065636:web:cde4e4429579a149b50af1",
  measurementId: "G-X1HT3ZJC3F"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

if (typeof firebase.auth === 'function') {
    window.auth = firebase.auth();
}
