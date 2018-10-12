import { getStepsFromQuestionnaire } from "../";

test("authentificate", () => {
  const response = getStepsFromQuestionnaire(questionnaire);

  expect(steps).toEqual(correctSteps);
});
