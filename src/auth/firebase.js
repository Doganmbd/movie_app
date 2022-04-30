// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,  signOut} from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password,navigate,displayName)=> {
    try{
        let userCredential= await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: displayName , })
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

export const logOut = () => {
    signOut(auth);
    
  };

export const userObserver = (setCurrentUser) => {

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setCurrentUser(currentUser)
        } else {
          // User is signed out
          setCurrentUser(false)
        }
      });
}




    //* burada usenavigate kullanamamamızın sebebi hook lar function component or a custom React Hook function.component kullanılır
  


//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };