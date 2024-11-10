
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import{
    getAuth,createUserWithEmailandPassword,signInWithEmailandPassword
  }
  from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import{getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC75HJU7N7C0pMXDCAlKL4trbvfQOq0zDQ",
    authDomain: "xyzproject-318e8.firebaseapp.com",
    projectId: "xyzproject-318e8",
    storageBucket: "xyzproject-318e8.appspot.com",
    messagingSenderId: "644135169937",
    appId: "1:644135169937:web:560d34a703b63b345f7430",
    measurementId: "G-WP6S3EHTW0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const signUp=document.getElementById('submitsignup');
  signUp.addEventListener('click',(event)=>
{
    event.preventDefault();
    const name=document.getElementById('name').value;
})
  const analytics = getAnalytics(app);
