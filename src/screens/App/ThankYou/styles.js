import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  teamContainer: {
    flexDirection: "row"
  },
  memberContainer: {
    marginLeft: 7,
    marginRight: 7
  },
  memberImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginBottom: 5,
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.2)"
  },
  memberName: {
    textAlign: "center"
  }
}));
