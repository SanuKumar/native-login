import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "dodgerblue",
    },
    logo: {
      width: 300,
      height: 300,
      borderRadius: 200,
    },
    header_main: { paddingBottom: 20, fontSize: 24 },
    button_main: { marginTop: 30 },
    about: {
      paddingBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.about}>
        <Button
          title="Go to About Us"
          onPress={() => navigation.navigate("About")}
        />
      </Text>
      <Text style={styles.header_main}>Welcome to My App</Text>

      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.dribbble.com/users/9707868/screenshots/16799890/hfff_1_3_4x.png",
          // uri: "https://picsum.photos/id/237/200/300",
        }}
      />
      <View style={styles.button_main}>
        <Button
          color="#000"
          title="Click to login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};
export default Home;
