import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300
  },
  greetingText: {
    fontSize: 24,
    margin: 30,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
