import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Screen_01 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image
          style={{ flex: 1, width: "100%", borderRadius: 20, marginTop: 15 }}
          source={require("../assets/DATA/Container 17.png")}
        />
      </View>
      <View>
        <Text style={styles.text1}>Boost Productivity</Text>
        <Text style={styles.text2}>Simplify tasks, boost productivity</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen_02")}
          style={styles.button}
        >
          <Text style={styles.signUp}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_03")}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCircle}>
        <TouchableOpacity>
          <View style={styles.circle1}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.circle2}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.circle1}></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 15,
  },
  text2: {
    fontSize: 16,
    marginTop: 6,
    color: "#a9aeb7",
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#28c4dc",
    padding: 15,
    borderRadius: 7,
  },
  signUp: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 18,
  },
  login: {
    textAlign: "center",
    width: "100%",
    fontSize: 18,
    marginTop: 15,
    padding: 8,
  },
  containerCircle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30,
  },
  circle1: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#28c4dc",
    backgroundColor: "#fff",
  },
  circle2: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#28c4dc",
    backgroundColor: "#28c4dc",
  },
});
