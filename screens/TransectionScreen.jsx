import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import LeftArrow from "../assets/left-arrow.png";
import SearchMenu from "../assets/search-menu.png";
function TransectionScreen() {
  return (
    <View>
      <View style={styles.header}>
        {/* header */}
        <View style={styles.leftArrow}>
          <Image source={LeftArrow} style={styles.image} />
        </View>
        <View style={styles.title}>
          <Text>Transections</Text>
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
  header: {
    width: 100,
    flex:1,
    height:"maxContent",
    flexDirection:"row",
    justifyContent:"spaceBetween"
  },
  leftArrow: {
    width: 20,
  },
  title: {
    width: 60,
  },
  searchMenu: {
    width: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default TransectionScreen;
