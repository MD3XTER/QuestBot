import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "white",
  },
  mainText: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Arial",
    marginBottom: 25,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 25,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#8FCAFB",
    width: 200,
    height: 50,
    borderRadius: 25,
    elevation: 1,
  }
});
