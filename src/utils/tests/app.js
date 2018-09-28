import { getStepsFromQuestionnaire } from "../";

test("getStepsFromQuestionnaire", () => {
  const questionnaire = {

  };

  const correctSteps = [
    {

    }
  ];

  const steps = getStepsFromQuestionnaire(questionnaire);

  expect(steps).toEqual(correctSteps);
});
