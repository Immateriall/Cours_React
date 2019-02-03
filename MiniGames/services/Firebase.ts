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

  public async signUp(email: string, password: string, pseudo: string, profileImageUri?: string) {
    console.log("SIGN UP : ", email, "/", password);

    try {
      const userCredentials = await this.app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const userId = userCredentials.user.uid;
      console.log("Created user : ", userId);
      const user: User = {
        id: userId,
        email,
        pseudo,
        profileImageUri
      };
      console.log("USER : ", user);
      this.app
        .database()
        .ref("users/" + userId)
        .set(user)
        .catch(error => {
          console.log("error ", error);
          throw error;
        });
      return user;
    } catch (error) {
      console.log("ERROR SIGN UP: ", error);
      throw error;
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
            id: userId,
            email: res.email,
            pseudo: res.pseudo
          };
          console.log("----->", userData.email, "/", userData.pseudo);

          return userData;
        });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(user: User) {
    try {
      this.app
        .database()
        .ref("users/" + user.id)
        .set(user)
        .catch(error => {
          console.log("error ", error);
          throw error;
        });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export const firebaseService = new FirebaseService();
