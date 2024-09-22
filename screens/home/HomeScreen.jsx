import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../../assets/profile.png";
// import Montserrat from "../../assets/Montserrat"

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.name}>
          {/* name */}
          <View style={styles.username}>
            <Text style={styles.usernameStyle}>Hi, David 👋</Text>
          </View>
          {/* text */}
          <View style={styles.text}>
            <Text>Explore the world</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.imageCircle}>
            <Image source={Profile} style={styles.profileImage} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    height:'100vh',
    width:'100vw',
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // height:'20%',
    width:'100%',
  },
  name: {},
  username: {},
  usernameStyle: {
    fontWeight: "bold",
  },
  text: {
    opacity: "50%",
  },
  profile: {
    width: "13%",
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCircle: {
    width: "80%",
    height: "80%",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    // height: "100%",
  },
});
