import React from "react";
import { View, Text } from "react-native";
import ChatBot from "react-native-chatbot";

const triggerAlert = () => {
  alert("Hello Arminda");
  return "3"
};

function Chat() {
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: triggerAlert
    },
    {
      id: "3",
      message: "Hello Max",
      end: true
    },
  ];

  return (
    <View>
      <ChatBot
        style={{ height: "70%" }}
        steps={steps}
        botAvatar={"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}
      />
    </View>
  );
}

export default Chat;
