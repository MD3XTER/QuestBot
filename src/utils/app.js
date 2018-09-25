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
