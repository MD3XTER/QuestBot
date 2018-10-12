import { authentificateURL, questionnaireURL } from "../config";

export const authentificate = async () => {
  const loginData = {
    username: "saxion_questbot",
    password: "f7c4fe4210de0eadf047b8efdbd8ec4a"
  };

  let response = await fetch(authentificateURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
  response = await response.json();

  return response.user.token;
};

export const getQuestionnaire = async authToken => {
  let response = await fetch(questionnaireURL, {
    method: "GET",
    headers: {
      "X-CSRFToken": authToken
    }
  });
  response = await response.json();

  return JSON.parse(response.content.content);
};
