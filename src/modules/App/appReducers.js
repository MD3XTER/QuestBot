import * as actions from "./appActions";

const INITIAL_STATE = {
  authToken: "",
  questionnaire: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.AUTH_TOKEN_CHANGED:
      return {
        ...state,
        authToken: action.payload
      };
    case actions.QUESTIONNAIRE_CHANGED:
      return {
        ...state,
        questionnaire: action.payload
      };
    default:
      return state;
  }
};
