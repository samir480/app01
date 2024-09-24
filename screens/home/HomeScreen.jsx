import { Image, StyleSheet,Dimensions, Text, View } from "react-native";
import React from "react";
import Profile from "../../assets/profile.png";
// import Montserrat from "../../assets/Montserrat"

export default function HomeScreen() { 
  const screenHeight = Dimensions.get('window').height;

  const headerHeight = 70;

  const bodyHeight =screenHeight - headerHeight;
  return (
    <View style={styles.main}>
      {/* header */}
      <View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.name}>
          {/* name */}
          <View style={styles.username}>
            <Text style={styles.usernameStyle}>Hi, David 👋</Text>
          </View>
          {/* text */}
          <View style={styles.text}>
            <Text style={styles.textStyle}>Explore the world</Text>
          </View>
        </View>
        <View style={styles.profile}>
          <View style={styles.imageCircle}>
            <Image source={Profile} style={styles.profileImage} />
          </View>
        </View>
      </View>
      <View style={[styles.child, { height: bodyHeight }]}>

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
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // height:70,
    width:'100%',
  },
  name: {
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  username: {},
  usernameStyle: {
    fontWeight: "bold",
    fontSize:'5vw'
  },
  textStyle: {
    fontWeight: "bold",
    fontSize:'5vw'
  },
  text: {
    opacity: "50%",
  },
  profile: {
    // width: "18vw",
    width: 82,
    height: "100%",
    // height:'maxContent'
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCircle: {
    width: "80%",
    height: "100%",
    borderColor: "red",
    borderWidth: .5,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  child:{
    width: "100%",
    // height: (calc ? "100%" : "100%")/,
    // height: (calc ? "80px-100%" : "80"),
    // height: "100%",
    borderColor: "red",
    borderWidth: .5,
    // borderRadius:,
  }
});
