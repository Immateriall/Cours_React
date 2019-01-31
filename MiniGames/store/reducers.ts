import { SET_USER_ACTION } from "./actions";
import { RootState } from "./RootState";

const initialState: RootState = {
  user: null
};

function rootReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  if (action.type === SET_USER_ACTION)
    return {
      ...state,
      user: action.payload
    };
  return state;
}

export default rootReducer;
