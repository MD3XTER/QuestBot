import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  thankYouContainer: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    alignItems: "center",
    justifyContent: "center"
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    position: "absolute",
    bottom: 25
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'lightgrey',
    margin: 3
  },
  goodbyeText: {
    fontSize: 24,
    margin: 30,
    textAlign: 'center',
    fontWeight: "bold"
  },
  teamText: {
    bottom: 5,
    fontSize: 24,
    margin: 30,
    textAlign: 'center',
  },
  bye: {
    width: 200,
    height: 200,
    borderRadius: 50
  }
});
