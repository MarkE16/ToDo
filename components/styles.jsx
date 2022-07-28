import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ededed',
  },

  horizontalRule: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 30,
    width: Dimensions.get('window').width - 100,
  },

  headerContainer: {
    margin: 20,
    alignItems: 'center',
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    alignSelf: 'center',
  },

  subHeader: {
    fontSize: 20,
    fontStyle: 'italic',
  },

  btnContainer: {
    backgroundColor: '#19a3b5',
    padding: 10,
    margin: 5,
    borderRadius: "5%",
  },

  btnTxt: {
    color: 'white',
    textAlign: 'center',
  },

  tasksContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: "5%",
    padding: 30,
    display: "flex",
    flexWrap: "wrap",
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height - 400,
  },

  inputContainer: {
    alignItems: "center",
    margin: 30,
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: Dimensions.get("window").width - 100,
  },

  actions: {
    display: "flex",
  }
});

export default styles;