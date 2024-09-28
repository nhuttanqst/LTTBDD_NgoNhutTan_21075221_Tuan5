import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Screen_02 = () => {
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <FontAwesome6
            onPress={() => navigation.goBack()}
            name="arrow-left-long"
            size={24}
            color="#6c7474"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image source={require("../assets/DATA/Image 19.png")} />
        <Text style={styles.text1}>Nice to see you!</Text>
        <Text style={styles.text2}>Create your account</Text>
      </View>
      <View>
        <View style={styles.groupInput}>
          <Image
            style={styles.imageInput}
            source={require("../assets/DATA/codicon_account.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your user name"
          />
        </View>
        <View style={styles.groupInput}>
          <Image
            style={[styles.imageInput, { width: 20, height: 15, top: 14 }]}
            source={require("../assets/DATA/Vector.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email address"
          />
        </View>
        <View style={styles.groupInput}>
          <Image
            style={styles.imageInput}
            source={require("../assets/DATA/lock.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
          />
          <Image
            style={styles.imageEye}
            source={require("../assets/DATA/eye.png")}
          />
        </View>
      </View>
      <View style={styles.groupCheckBox}>
        <CheckBox
          value={checked}
          onValueChange={() => setChecked((prev) => !prev)}
        />
        <Text style={{ fontSize: 15, marginLeft: 10 }}>
          I agree with{" "}
          <Text style={{ color: "#62afec", fontWeight: "400" }}>
            Terms & Conditions
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.continue}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen_02;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  header: {
    alignItems: "center",
    marginVertical: 60,
  },
  text1: {
    fontSize: 35,
    fontWeight: "600",
    marginTop: 15,
    color: "#30353a",
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 4,
    color: "#6c7474",
  },
  groupInput: {
    position: "relative",
    marginBottom: 23,
  },
  imageInput: {
    position: "absolute",
    top: 12,
    left: 14,
    width: 20,
    height: 20,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#9095a0",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  imageEye: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 22,
    height: 22,
  },
  groupCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#28c4dc",
    padding: 15,
    borderRadius: 15,
  },
  continue: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 18,
  },
});
