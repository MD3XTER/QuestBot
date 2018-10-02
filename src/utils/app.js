import response from "./response"

export const getStepsFromQuestionnaire = () => {
  console.log(response);

  let questions = [];
  response.pages.map((page) => {
    page.elements.map((element) => {
      const question = {
        label: ""
      };

      if (element.type !== "question_open" && element.type !== "question_closed") {
        return
      }

      question.label = element.label;

      if (element.type === "question_closed") {
        question["options"] = getCloseQuestion(element);
      }

      questions.push(question);
    });
  });

  let steps = [];
  let stepIndex = 1;
  questions.map((question, index) => {
    const questionStep = {
      id: `${stepIndex}`,=
    };

    if (question.options) {
      questionStep["options"] = question.options;
    }
    else if (index < questions.length) {
      questionStep["message"] = question.label;
      questionStep["trigger"] = `${stepIndex+1}`;
    }

    stepIndex++;

    const answerStep = {
      id: `${stepIndex}`,
      user: true
    };

    if (index < questions.length-1) {
      answerStep["trigger"] = `${stepIndex+1}`;
      stepIndex++;
    }
    else {
      answerStep["end"] = true;
    }

    steps.push(questionStep);
    steps.push(answerStep);
  });

  console.log(questions);
  console.log(steps);

  return steps;
};

const getCloseQuestion = (element) => {
  const options = [];
  element.optionGroup.options.map((elementOption) => {
    const option = {
      value: elementOption.value,
      label: elementOption.label,
      trigger: "1",
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
      id: '2',
      options: [
        { value: currentOption, label: getOption(), trigger: '3' },
        { value: currentOption, label: getOption(), trigger: '3' },
        { value: currentOption, label: getOption(), trigger: '3' },
      ],
    },
    {
      id: "3",
      message: getChosenOption,
      end: true
    }
  ];

  function getOption(){
    currentOption++;
    return "insert option" + currentOption;
  }

  function getChosenOption({ previousValue, steps }){
    storeValue = previousValue;

    allValues.push(storeValue);

    alert(allValues.length);

    return "";
  }

  function getChosenQuestion(){
    return "insert question : what's up?";
  }

  return steps;
};
