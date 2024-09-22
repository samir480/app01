import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LeftArrow from "../assets/left-arrow.png";
import SearchMenu from "../assets/search-menu.png";
function TransectionScreen() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {/* header */}
        <View style={styles.leftArrow}>
          <Image source={LeftArrow} style={styles.image} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleClass}>Transections</Text>
        </View>
        <View style={styles.searchMenu}>
          <Image source={SearchMenu} style={styles.image} />
        </View>
      </View>
      <View style={styles.list}>{/* list */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 7, // Top margin
    marginRight: 5, // Right margin
    marginBottom: 7, // Bottom margin
    marginLeft: 5, // Left margin
  },
  header: {
    // width: 100,
    flex: 1,
    // height:"maxContent",
    // flexDirection:"row",
    // justifyContent:"spaceBetween"

    flexDirection: "row", // Horizontal layout
    justifyContent: "space-between", // Align children with space between
    alignItems: "center",
  },
  leftArrow: {
    width: 20,
  },
  title: {
    width: "maxContent",
  },
  searchMenu: {
    width: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  titleClass: {
    fontSize: 20,
    fontWeight:'bold',
  },
});

export default TransectionScreen;
