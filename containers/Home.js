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
          // uri: "https://instagram.fixr1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/271669492_680934443290792_3017890099147487546_n.jpg?_nc_ht=instagram.fixr1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=CKlbGadEh1YAX9rzToJ&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc1MDEwODgxMTk3ODkwODg4MQ%3D%3D.2-ccb7-4&oh=00_AT9m2Y2uKCsZeK_halN6b-KEaX4YNOoWazE_XNHA6IjkFQ&oe=61F4AD0D&_nc_sid=30a2ef",
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
