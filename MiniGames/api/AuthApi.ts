import { firebaseService } from "../services/Firebase";

export type User = {
  email: string;
  pseudo: string;
};

class AuthApi {
  public async login(email: string, password: string) {
    console.log("LOGIN");

    const userData = await firebaseService.login(email, password);
    const user: User = JSON.parse(JSON.stringify(userData));

    return user;
  }

  public async signUp(email: string, password: string, pseudo: string) {
    console.log("SIGNUP");

    const userData = await firebaseService.signUp(email, password, pseudo);
    const user: User = JSON.parse(JSON.stringify(userData));

    return user;
  }
}

export const authApi = new AuthApi();
