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
import { Input, Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

        <TouchableOpacity
          onPress={login}
          className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
        >
          <Text className="text-white font-bold text-[15px]">SIGN IN</Text>
        </TouchableOpacity>
        {
          <Text className="text-center" style={styles.error}>
            {validationMessage}
          </Text>
        }

        <View className="mt-16">
          <Text className="text-sm text-center text-gray-400 font-bold">
            or continue with
          </Text>
          <View className="flex justify-between flex-row">
            <TouchableOpacity className="items-center mt-10 bg-blue-600 p-5 rounded-[30px]">
              <Text className="text-white font-bold text-[15px]">FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center mt-10 bg-gray-200 p-5 rounded-[30px]">
              <Text className="text-black font-bold text-[15px]">GOOGLE</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-10 items-center">
            <View>
              <Text className="flex">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("signup")}
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
