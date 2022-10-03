import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Zocial } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Input, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");

  async function login() {
    if (email === "" || password === "") {
      setvalidationMessage("required filled missing");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      setvalidationMessage(error.message);
    }
  }

  return (
    <View
      className="flex-1 h-full w-full bg-white items-center"
      style={styles.container}
    >
      <View className="mt-[180px]">
        <Text className="font-bold text-[20px]">Welcome to Movietime!</Text>
        <Text className="text-center">Your movie is ready</Text>
      </View>
      <View className="mt-10 w-[80%]">
        <Input
          placeholder="Email"
          containerStyle={{ marginTop: 10, backgroundColor: "white" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name="envelope" size={16} />}
        />
        <Input
          placeholder="Password"
          containerStyle={{ marginTop: 10 }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />
        <TouchableOpacity>
          <Text className="text-blue-300">Forgot your password?</Text>
        </TouchableOpacity>
        {
          <Text className="text-center" style={styles.error}>
            {validationMessage}
          </Text>
        }

        <TouchableOpacity
          onPress={login}
          className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
        >
          <Text className="text-white font-bold text-[15px]">SIGN IN</Text>
        </TouchableOpacity>

        <View className="mt-16">
          <Text className="text-sm text-center text-gray-400 font-bold">
            or continue with
          </Text>
          <View className="flex justify-between flex-row">
            <TouchableOpacity className="items-center mt-10 bg-blue-600 p-5 rounded-[30px]">
              <View className="flex flex-row space-x-2">
                <Zocial
                  name={"facebook"}
                  color={"white"}
                  size={20}
                  // onPress={toggleIsLoading}
                />
                <Text className="text-white font-light mt-1 text-[15px]">
                  FACEBOOK
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="items-center mt-10 bg-gray-300 p-5 rounded-[30px]">
              <View className="flex flex-row space-x-2">
                <Fontisto
                  name={"google"}
                  color={"blue"}
                  size={20}
                  // onPress={toggleIsLoading}
                />
                <Text className="text-black font-light text-[15px]">
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="mt-10 items-center">
            <View>
              <Text className="flex">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("singup")}
                className="mt-3 items-center"
              >
                <Text className="text-blue-400 font-bold">SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 50,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
});
