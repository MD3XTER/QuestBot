import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  helpButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 56,
    backgroundColor: '#8FCAFB'
  },
  overlay: {
    borderRadius: 30,
    minWidth: 250,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  overlayImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  }
}));
