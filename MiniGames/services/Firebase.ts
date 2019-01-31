import * as firebase from "firebase";

import { User } from "../api/AuthApi";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDxqviWavFIs6898a5z4oC-ctJ6qpyK4oI",
  authDomain: "rn2-nice.firebaseapp.com",
  databaseURL: "https://rn2-nice.firebaseio.com"
};

class FirebaseService {
  private app: firebase.app.App;

  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
  }

  public async signUp(email: string, password: string, pseudo: string) {
    console.log("SIGN UP : ", email, "/", password);
    const userCredentials = await this.app
      .auth()
      .createUserWithEmailAndPassword(email, password);
    // console.log("USER CREDENTIALS : ", userCredentials);
    if (userCredentials && userCredentials.user) {
      const userId = userCredentials.user.uid;
      console.log("USER ID : ", userId);
      this.app
        .database()
        .ref("users/" + userId)
        .set({
          email,
          pseudo
        })
        .then(data => {
          //success callback
          console.log("data ", data);
        })
        .catch(error => {
          //error callback
          console.log("error ", error);
        });
    }
  }

  public async login(email: string, password: string) {
    console.log("LOGIN : ", email, "/", password);

    try {
      const userCredentials = await this.app
        .auth()
        .signInWithEmailAndPassword(email, password);
      const userId = userCredentials.user.uid;
      const data = await this.app
        .database()
        .ref("/users/" + userId)
        .once("value", snapshot => {
          const res = snapshot.val();
          const userData: User = {
            email: res.email,
            pseudo: res.pseudo
          };
          console.log("----->", userData.email, "/", userData.pseudo);

          return userData;
        });
      return data;
    } catch (error) {}

    return null;
  }
}

export const firebaseService = new FirebaseService();
