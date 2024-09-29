import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AccountContext } from "../AccountContext/AccountContext";
import validator from "validator";

const Screen_03 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(true);

  const { account } = useContext(AccountContext);
  const navigation = useNavigation();

  const validateForm = () => {
    if (!email || !password) {
      Alert.alert("Incomplete Form", "Please fill in all fields!");
      return false;
    } else if (!validator.isEmail(email)) {
      Alert.alert("Invalid email!", "Please enter a valid email address!");
      return false;
    }
    return true;
  };

  const checkAccount = () => {
    const found = account.find((item) => item.email === email);
    if (!found) return false;
    if (found.password !== password) return false;
    return true;
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setType(true);
  };

  const handleLogin = () => {
    if (!validateForm()) return;
    if (!checkAccount()) {
      Alert.alert(
        "Invalid Credentials",
        "Please check your email and password"
      );
      return;
    }
    Alert.alert(
      "Login Successful!",
      "Welcome! You have successfully logged into your account",
      [
        {
          text: "OK",
          onPress: () => {
            resetFields();
            navigation.navigate("Screen_04");
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/DATA/Image20.png")}
            />
          </View>
          <View style={styles.content}>
            <View>
              <Text style={styles.text}>Welcome!</Text>
            </View>
            <View>
              <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Email</Text>
                <Image
                  style={styles.imageInput}
                  source={require("../assets/DATA/Vector.png")}
                />
                <TextInput
                  value={email}
                  style={styles.textInput}
                  placeholder="Enter email"
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View style={styles.groupInput}>
                <Text style={[styles.titleInput, { marginTop: 20 }]}>
                  Password
                </Text>
                <Image
                  style={[styles.imageInput, { top: 63 }]}
                  source={require("../assets/DATA/lock.png")}
                />
                <TextInput
                  value={password}
                  secureTextEntry={type}
                  placeholder="Enter password"
                  style={styles.textInput}
                  onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity
                  style={styles.imageEye}
                  onPress={() => setType((prev) => !prev)}
                >
                  <Image source={require("../assets/DATA/eye.png")} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.button}
              >
                <View>
                  <Text style={styles.login}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Screen_03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9fafc",
  },
  image: {
    width: "100%",
  },
  content: {
    position: "absolute",
    top: 183,
    left: 0,
    backgroundColor: "#f9fafc",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 30,
    borderRadius: 15,
  },
  text: {
    fontSize: 40,
    fontWeight: "500",
    color: "#393a3f",
  },
  groupInput: {
    position: "relative",
  },
  titleInput: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 50,
    marginBottom: 10,
    color: "#5e6168",
  },
  imageInput: {
    position: "absolute",
    top: 94,
    left: 14,
    width: 26,
    height: 20,
    zIndex: 1,
  },
  textInput: {
    backgroundColor: "#f0f1f5",
    fontWeight: "500",
    paddingVertical: 15,
    paddingHorizontal: 52,
    borderRadius: 4,
    fontSize: 16,
  },
  imageEye: {
    position: "absolute",
    top: 62,
    right: 8,
    width: 30,
    height: 30,
  },
  buttonContainer: {
    marginTop: 80,
    width: "100%",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#28c4dc",
    padding: 15,
    borderRadius: 30,
  },
  login: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 18,
  },
});
