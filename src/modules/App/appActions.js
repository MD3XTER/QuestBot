export const AUTH_TOKEN_CHANGED = "auth_token_changed";
export const QUESTIONNAIRE_CHANGED = "questionnaire_changed";

export const authTokenChanged = value => {
  return {
    type: AUTH_TOKEN_CHANGED,
    payload: value
  }
};

export const questionnaireChanged = value => {
  return {
    type: QUESTIONNAIRE_CHANGED,
    payload: value
  }
};
