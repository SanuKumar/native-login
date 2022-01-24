import React, { useState } from "react";
import {
  View,
  Text,
  // SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import axios from "axios";
import SafeAreaView from "react-native-safe-area-view";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (email === "sanu@sanu.com" && password === "sanu") {
      navigation.navigate("Users");
      // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log("getting data from axios", res.data);
      // });
    } else {
      Alert.alert("Warning", "Enter correct credential");
    }
    // navigation.navigate("Users");
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "dodgerblue",
      justifyContent: "center",
      alignItems: "center",
    },
    text_wrapper: { width: 300 },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    labels: { justifyContent: "center", alignItems: "center" },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_wrapper}>
        <Text style={styles.labels}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(evt) => setEmail(evt)}
          value={email}
          name="email"
          placeholder="Enter Email"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.text_wrapper}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(evt) => setPassword(evt)}
          value={password}
          name="password"
          placeholder="Enter Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <Button title="Login" color="#841584" onPress={onSubmit} />
    </SafeAreaView>
  );
};

export default Login;
