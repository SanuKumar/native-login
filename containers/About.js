import React from "react";
import { Text, View, StyleSheet } from "react-native";

const About = () => {
  const styles = StyleSheet.create({
    about: {
      padding: 10,
    },
    header: {
      fontSize: 30,
      paddingTop: 30,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.header}>
      <Text>About Me</Text>
      <Text style={styles.about}>
        Software developer with around 5 years of experience. Ability to create
        innovative, creative, & interactive web designs to boost customer
        engagement. Sound knowledge in React, Redux, JavaScript, HTML, CSS&
        other UI frameworks.
      </Text>
    </View>
  );
};
export default About;
