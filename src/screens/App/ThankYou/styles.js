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
  teamImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'lightgrey',
    margin: 3,
    flex: 0
  },
  goodbyeTextContainer: {
    backgroundColor: 'orange',
    borderWidth: 3,
    borderColor: 'lightgrey',
    flex: 0,
    borderRadius: 30,
    position: 'absolute',
    width: 250,
    top: 15
  },
  goodbyeText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: "bold"
  },
  teamTextContainer: {
    backgroundColor: 'orange',
    borderWidth: 3,
    borderColor: 'lightgrey',
    borderRadius: 30,
    flex: 0,
    margin: 10,
    width: 230
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
  teamText: {
    fontSize: 18,
    textAlign: 'center',
  },
  roboImage: {
    margin: 5,
    width: 200,
    height: 200,
    borderRadius: 50,
    flex: 0
  }
});
