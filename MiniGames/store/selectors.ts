import { RootState } from "./RootState";

export function getUser(state: RootState) {
  return state.user;
}
