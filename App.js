import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import SignupForm from "./components/form/signupForm/SignupForm"
import  LoginScreen  from "./screens/LoginScreen";
import TransectionScreen from "./screens/TransectionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <SignupForm/> */}
      {/* <LoginScreen /> */}
      <TransectionScreen/>
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
