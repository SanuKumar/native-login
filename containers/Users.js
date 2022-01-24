import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
  Button,
} from "react-native";
import axios from "axios";

const Users = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const goForAxios = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("getting data from axios", res.data);
        setLoading(false);
        setUsers(res.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: "#d9f9b1",
      alignItems: "center",
    },
    text: {
      color: "#4f603c",
    },
    wrapper: {
      backgroundColor: "green",
      paddingTop: (Platform.OS = "android" ? StatusBar.currentHeight : 30),
    },
    main_header: {
      fontSize: 20,
      marginTop: 20,
    },
  });

  useEffect(() => {
    goForAxios();
  }, []);
  const alertItemName = (item) => {
    alert(item.name);
  };
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.main_header}>User's List</Text>
        <StatusBar style="auto" />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : !users.length ? (
          <Text>No Users Found</Text>
        ) : (
          users.map((user) => {
            return (
              <TouchableOpacity
                key={user.id}
                style={styles.container}
                onPress={() => alertItemName(user)}
              >
                <Text style={styles.text}>{user.name}</Text>
              </TouchableOpacity>
            );
          })
        )}
      </View>
      <Button
        title="Go to About Us"
        onPress={() => navigation.navigate("About")}
      />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </SafeAreaView>
  );
};

export default Users;
