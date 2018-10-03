import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    alignItems: "center",
    justifyContent: "center"
  },
  teamImage: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 50,
    flex: 0
  },
  greetingTextContainer: {
    backgroundColor: 'orange',
    borderWidth: 3,
    borderColor: 'lightgrey',
    borderRadius: 30,
    width: 250,
    margin: 20,
    height: 60
  },
  greetingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
  },
  descriptionContainer: {
    backgroundColor: 'orange',
    borderWidth: 3,
    borderColor: 'lightgrey',
    borderRadius: 30,
    width: 300,
    margin: 20,
    flex: 0
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 15,
    width: 250,
    fontStyle: 'italic'
  },
  continueButton: {
    backgroundColor: 'orange',
    width: 75,
    height: 75,
    borderRadius: 50,
    elevation: 5,
    borderWidth: 3,
    borderColor: 'lightgrey',
  }
});
