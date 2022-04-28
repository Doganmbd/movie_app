// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRL_j-pIQ8mw5GeBnxo_puaKP7vR94F_E",
    authDomain: "movie-app-project-91950.firebaseapp.com",
    projectId: "movie-app-project-91950",
    storageBucket: "movie-app-project-91950.appspot.com",
    messagingSenderId: "855449677945",
    appId: "1:855449677945:web:85461865317d29552564a8",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password,navigate)=> {
    try{
        let userCredential= await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);

        navigate("/");
    } catch (error) {
        alert(error.message)
    }

}


export const signIn =async (email, password,navigate)=> {
    
    try{
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential);

        navigate("/");
    } catch (error) {
        alert(error.message)
    }

}



    
