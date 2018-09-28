import response from "./response"

export const getSteps = () => {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2"
    },
    {
      id: "2",
      message: "hekki",
      // user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hello Max",
      end: true
    }
  ];

  return steps;
};

export const getStepsFromQuestionnaire = () => {
  console.log(response);

  let steps = [];
  steps.push(response.pages.map((page, index) => {

  }));

  page.elements.map((element, index) => {
    if (element.type === "question_open" || element.type === "question_closed") {
      const step = {
        id: `${steps.length+1}`,
        message: element.label,
      };

      if (index < page.elements.length-1) {
        step["trigger"] = index+1;
      }
      else {
        step["end"] = true;
      }

      steps.push(step);
    }
  });


    console.log(steps);

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
