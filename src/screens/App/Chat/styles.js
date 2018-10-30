import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  chatScreen: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
  },
  helpButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
    backgroundColor: '#8FCAFB'
  },
  overlay: {
    marginTop: -75,
    borderRadius: 15,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  overlayImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10
  }
}));
