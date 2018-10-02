import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  greetingText: {
    fontSize: 24,
    margin: 30,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 5
  }
});
