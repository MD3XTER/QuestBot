import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  greetingContainer: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  greetingText: {
    fontSize: 25,
    position: "absolute",
    top: 50,
    textAlign: 'center',
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 15,
    width: 250,
  },
  continueButton: {
    backgroundColor: 'lightslategrey',
    width: 75,
    height: 75,
    borderRadius: 50,
    elevation: 5,
    borderWidth: 3,
    borderColor: 'lightgrey',
  }
});
