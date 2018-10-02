import response from "./response";

export const getStepsFromQuestionnaire = () => {
  console.log(response);

  const questions = getQuestions(response.pages);

  let steps = [];
  let stepIndex = 1;

  questions.map((question, index) => {
    let nextStepID = getNextStepID(index, questions.length, stepIndex);

    let stepQuestion;

    stepQuestion = getStepOpenQuestion(stepIndex, question.label, nextStepID);

    steps.push(stepQuestion);
    stepIndex++;
    nextStepID = getNextStepID(index, questions.length, stepIndex);

    if (question.options) {
      stepQuestion = getStepCloseQuestion(stepIndex, question.options);

      steps.push(stepQuestion);
      stepIndex++;
    }
    else {
      const answer = getStepAnswer(stepIndex, nextStepID);

      steps.push(answer);
      stepIndex++;
    }

  });

  console.log(questions);
  console.log(steps);

  return steps;
};

const getNextStepID = (questionIndex, questionsLength, currentStepIndex) => {
  return questionIndex === questionsLength-1 ? false : currentStepIndex+1;

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
        question["options"] = getElementCloseQuestionOptions(element.optionGroup, 1);
      }
      else {
        return false;
      }

      questions.push(question);
    });
  });

  return questions;
};

const getStepOpenQuestion = (id, label, nextElementID) => {
  const step = {
    id: `${id}`,
    message: label,
  };

  if (nextElementID) {
    step["trigger"] = `${nextElementID}`;
  }
  else {
    step["end"] = true;
  }

  return step;
};

const getStepCloseQuestion = (id, options) => {
  const step = {
    id: `${id}`,
    options
  };

  return step;
};

const getStepAnswer = (id, nextElementID) => {
  const step = {
    id: `${id}`,
    user: true
  };

  if (nextElementID) {
    step["trigger"] = `${nextElementID}`;
  }
  else {
    step["end"] = true;
  }

  return step;
};

const getElementCloseQuestionOptions = (optionGroup, nextElementID) => {
  const options = [];
  optionGroup.options.map((elementOption) => {
    const option = {
      value: elementOption.value,
      label: elementOption.label,
      trigger: `${nextElementID}`,
    };

    options.push(option);
  });

  return options;
};

export const getClosedQuestions = () => {
  let storeValue;
  let allValues = [];
  let currentOption = 0;

  const steps = [
    {
      id: "1",
      message: getChosenQuestion(),
      trigger: "2"
    },
    {
      id: "2",
      options: [
        { value: currentOption, label: getOption(), trigger: "3" },
        { value: currentOption, label: getOption(), trigger: "3" },
        { value: currentOption, label: getOption(), trigger: "3" }
      ],
      // { This is for stopping the program, need to put this in the main operation
      waitAction: quitSurvey(),
      triggerNextStep: ({ value: currentOption, trigger: "3"})
      // }
    },
    {
      id: "3",
      message: getChosenOption,
      end: true
    }
  ];

  function getOption() {
    currentOption++;
    return "insert option" + currentOption;
  }

  function getChosenOption({ previousValue, steps }) {
    storeValue = previousValue;

    allValues.push(storeValue);

    alert(allValues.length);

    return "";
  }

  function getChosenQuestion() {
    return "insert question : what's up?";
  }
// this function is needed to check if user inputs STOP then trigger the option to stop, THIS SHOULDN't BE HERE BUT FOR NOW.
  function quitSurvey(stopStr,nextStep, currentOption) {
    if (stopStr.equals("STOP")){
      getQuit(nextStep, currentOption)
    }
  }

  return steps;
};
// steps to stop the program
export const getQuit = (nextStep, currentOption) => {
  const steps = [
    {
      id: "1",
      message: "Are you sure you want to STOP",
      user: true,
      options: [
        { value: 1, label: "Do you need to go?", trigger: "2" },
        { value: 2, label: "Wanna keep talking?", trigger: "3" }
      ]
    },
    {
      id: "2",
      message: "Yay, okay my next question is... ",
      triggerNextStep: ({ value: currentOption, trigger: nextStep})
    },
    {
      id: "3",
      message: "Okay good bye, hope to talk to you someday again",
      // main switch is needed to end the program
      end: true
    }
  ];

  return steps;
};

