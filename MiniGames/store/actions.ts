import { User } from "../api/AuthApi";

export const SET_USER_ACTION = "SET_USER";
export function setUserAction(payload: User) {
  return { type: SET_USER_ACTION, payload };
}
