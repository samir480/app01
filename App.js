import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import SignupForm from "./components/form/signupForm/SignupForm"
import  LoginScreen  from "./screens/LoginScreen";
import TransectionScreen from "./screens/TransectionScreen";
import HomeScreen from "./screens/home/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      {/* <SignupForm/> */}
      {/* <LoginScreen /> */}
      {/* <TransectionScreen/> */}
      <HomeScreen/>
      {/* <TextInput
        // style={styles.input}
        placeholder="Email"
        // value={email}
        // onChangeText={setEmail}
        // keyboardType="email-address"
        // autoCapitalize="none"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
