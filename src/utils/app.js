import apiResponse from "./api_response";
import botResponses from "./bot_responses";
import { navigateTo } from "./navigation";

export let steps = [];
export let userResponses = [];
let nextStepID;
let stepIndex = 1;
let questionsLength;
let additionalResponses = 0;
let skipSetId = 0;

export const getStepsFromQuestionnaire = () => {
  console.log(apiResponse);

  const questions = getQuestions(apiResponse.pages);
  questionsLength = questions.length;

  nextStepID = getNextStepID(questions.length, stepIndex);

  let stepResponse;

  botResponses.greetings.map((message) => {
    stepResponse = getStepOpenQuestion(stepIndex, message);
    addStep(stepResponse);
  });

  questions.map((question) => {
    let stepQuestion;
    stepQuestion = getStepOpenQuestion(stepIndex, question.label, true);
    addStep(stepQuestion);

    if (question.options) {
      stepQuestion = getStepCloseQuestion(stepIndex, question.options);
      addStep(stepQuestion);
    }
    else {
      const stepAnswer = getStepAnswer(stepIndex);
      addStep(stepAnswer);
    }

    const showResponse = Math.floor(Math.random() * Math.floor(questionsLength)) > 4;
    if (showResponse) {
      const response = botResponses.answer_responses[Math.floor(Math.random() * botResponses.answer_responses.length)];
      stepResponse = getStepOpenQuestion(stepIndex, response);
      addStep(stepResponse);
      additionalResponses++;
    }
  });

  botResponses.thanks.map((message, index) => {
    stepResponse = getStepOpenQuestion(stepIndex, message);

    if (index === botResponses.thanks.length - 1) {
      delete stepResponse["trigger"];
      stepResponse["end"] = true;
    }

    addStep(stepResponse);
  });

  console.log(`Additional steps added: ${additionalResponses}`);
  console.log(steps);

  return steps;
};

const addStep = (stepResponse) => {
  steps.push(stepResponse);
  stepIndex++;
  nextStepID = getNextStepID(questionsLength, stepIndex);
};

const getNextStepID = (questionsLength, currentStepIndex) => {
  const stepsAmount = questionsLength * 2 + additionalResponses;
  return currentStepIndex - 1 === stepsAmount + botResponses.greetings.length + botResponses.thanks.length ? stepsAmount + botResponses.greetings.length + 1 : currentStepIndex + 1;
};

const getQuestions = (pages) => {
  let questions = [];

  pages.map((page) => {
    page.elements.map((element) => {
      const question = {};

      if (element.type === "question_open") {
        question["label"] = element.label;
      }
      else if (element.type === "question_closed") {
        question["label"] = element.label;
        question["options"] = getElementCloseQuestionOptions(element.optionGroup);
      }
      else {
        return false;
      }

      questions.push(question);
    });
  });

  return questions;
};

const getStepOpenQuestion = (id, label, setId) => {
  const step = {
    id: `${id}`
  };

  if (setId) {
    step["message"] = `${id-skipSetId}. ${label}`;
  }
  else {
    skipSetId++;
    step["message"] = label;
  }

  step["trigger"] = `${nextStepID}`;

  return step;
};

const getStepCloseQuestion = (id, options) => {
  const step = {
    id: `${id}`,
    options,
  };

  skipSetId++;

  step.options = updateCloseQuestionOptions(options);

  return step;
};

const getStepAnswer = (id) => {
  const step = {
    id: `${id}`,
    user: true,
  };

  skipSetId++;

  step["trigger"] = ({ value, steps: currentSteps }) => value === "STOP" ? `${nextStepID}` : `${Object.keys(currentSteps).length + 1}`;

  return step;
};

const getElementCloseQuestionOptions = (optionGroup) => {
  const options = [];
  optionGroup.options.map((elementOption) => {
    const option = {
      value: elementOption.value,
      label: elementOption.label,
      trigger: ``
    };

    options.push(option);
  });

  return options;
};

const updateCloseQuestionOptions = (options) => {
  return options.map((option) => {
    option.trigger = nextStepID;
    return option;
  });
};