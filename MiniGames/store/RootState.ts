import { User } from "../api/AuthApi";

export type RootState = {
  user: User | null;
};
