import { firebaseService } from "../services/Firebase";

export type GameScore = {
  score: number;
};

export type User = {
  id: string;
  email: string;
  pseudo: string;
  profileImageUri?: string;
  scores?: {
    [gameId: string]: GameScore;
  };
};

class AuthApi {
  public async login(email: string, password: string) {
    console.log("LOGIN");

    const userData = await firebaseService.login(email, password);
    const user: User = JSON.parse(JSON.stringify(userData));

    return user;
  }

  public async signUp(email: string, password: string, pseudo: string, profileImageUri?: string) {
    console.log("SIGNUP");

    const userData = await firebaseService.signUp(email, password, pseudo, profileImageUri);
    const user: User = JSON.parse(JSON.stringify(userData));
    // console.log("SIGNED UP USER", user);

    return user;
  }

  public async updateUser(user: User) {
    const newUserData = firebaseService.updateUser(user);
    // const newUser: User = JSON.parse(JSON.stringify(newUserData));

    return newUserData;
  }
}

export const authApi = new AuthApi();
