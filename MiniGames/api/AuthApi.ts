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

    const userData = await firebaseService.login(email, password);
    const user: User = JSON.parse(JSON.stringify(userData));

    return user;
  }

  public async signUp(email: string, password: string, pseudo: string, profileImageUri?: string) {

    const userData = await firebaseService.signUp(email, password, pseudo, profileImageUri);
    const user: User = JSON.parse(JSON.stringify(userData));

    return user;
  }

  public async updateUser(user: User) {
    const newUserData = firebaseService.updateUser(user);
    // const newUser: User = JSON.parse(JSON.stringify(newUserData));

    return newUserData;
  }

  public async getUser(onChange: (user: any) => void) {
    return await firebaseService.getUser(user =>
      onChange(JSON.parse(JSON.stringify(user)))
    );
  }
  
  public async signOut() {
    return await firebaseService.signOut();
  }
}

export const authApi = new AuthApi();
