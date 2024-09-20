import { Text, TextInput, View } from "react-native";

const SignupForm = () => {
  return (
    <View>
      <TextInput
        // style={styles.input}
        placeholder="Email"
        // value={email}
        // onChangeText={setEmail}
        // keyboardType="email-address"
        // autoCapitalize="none"
      />
    </View>
  );
};

export default SignupForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
